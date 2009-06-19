require 'rake'
require 'rake/packagetask'
require 'yaml'

LIBRARY_ROOT = File.expand_path(File.dirname(__FILE__))

def sprocketize(load_path, sources)
  begin
    require "sprockets"
  rescue LoadError => e
    puts "\nYou'll need Sprockets to build oatlib. Just run:\n\n"
    puts " $ git submodule init"
    puts " $ git submodule update"
    puts "\nand you should be all set.\n\n"
  end
  
  secretary = Sprockets::Secretary.new(
    :root => LIBRARY_ROOT,
    :load_path => load_path,
    :source_files => sources
  )

  #secretary.concatenation.save_to(File.join(LIBRARY_ROOT, destination))
  secretary.concatenation.to_s.split(/\n/)
end

def symbolize(src)
	symbols = [] # holds 'symbols' found in js
	codeLines = [] # holds every line, to be written out later
	results = []

	src.each do |line|
		matches = line.scan(/\$(\$?_?[A-Za-z][A-Za-z0-9]*)/)
		matches && matches.map {|array| array[0]}.each do |symbol|
			symbols.push(symbol) # record any symbols in the array
		end
		codeLines.push(line) # record every line for use later
	end

	results.push('(function () {')
	results.push([symbols.uniq.inject('var ') {|symbols, symbol| [symbols,'$',symbol,symbol =~ /^\$_(.*)/ && '' || symbol =~ /^\$(.*)/ && [' = ',$1].join() || [" = '",symbol,"'"].join(),', '].join()},"emptyString = '';"].join())
	results.concat(codeLines)
	results.push('})();')

	return results

end

def auto_dep(src,exclude)
	symbols = []
	codeLines = []
	requires_lines = []
	results = []

	src.each do |line|
		matches = line.scan(/\$\$_([A-Za-z][A-Za-z0-9]*)/)
		matches && matches.map {|array| array[0]}.each do |symbol|
			symbols.push(symbol) # record any symbols in the array
		end
		codeLines.push(line)
	end

	symbols.uniq.each do |symbol|
		next if symbol == exclude
		requires_lines.push(['//= require <',symbol,'>'].join)
	end

	results.concat(requires_lines);
	results.concat(codeLines)

	return results

end

def create_tmp_src
	delete_tmp_src
  FileUtils.cp_r File.join(LIBRARY_ROOT,'src'), File.join(LIBRARY_ROOT,'tmpsrc')
end

def delete_tmp_src
  FileUtils.rm_r File.join(LIBRARY_ROOT,'tmpsrc')
end

def get_files_under_path(directory_path)
	cd File.join(directory_path)
	return Dir['**/*.*']
end

def dist(file_path,contents)
	File.new(file_path, File::CREAT|File::TRUNC|File::RDWR, 0644).close()
	File.open(file_path, File::CREAT|File::TRUNC|File::WRONLY) {|f| # open a tmp file to write in
		f.puts contents
	}
end

def get_lines_from_path(file_path)

	file_contents = []

	File.open(file_path, 'r') do |infile|
		file_contents.concat(infile.readlines)
	end

	return file_contents

end

task :default do
	desc "build all modules and their tests"
	Rake::Task['build_tests'].invoke('all')
	Rake::Task['minify'].invoke
end

task :build_tests, [:module_string] => [:build] do |t, args|
	desc "pass a list of modules to build tests for: rake build_tests[\"functional dom dom-effects\"] (units.js results in the dist/tests dir; this will build oatlib with those modules first)"
	modules = args.module_string.split(' ').unshift('core').collect {|module_name| File.join('units',module_name + '.tests.js') }
	sprocketized_src = sprocketize(['src','units'],modules)
	dist(File.join(LIBRARY_ROOT,'dist','tests','units.js'),sprocketized_src)
end

task :build, :module_string do |t, args|
	desc "pass a list of modules to build oatlib for: rake build[\"event dom-effects date\"] (oatlib.debug.js results in the dist dir)"
	modules = args.module_string.split(' ').unshift('core').collect {|module_name| File.join('src',module_name + '.js') }
	sprocketized_src = sprocketize(['src'],modules)
	symbolized_src = symbolize(sprocketized_src)
	dist(File.join(LIBRARY_ROOT,'dist','oatlib.debug.js'),symbolized_src)
end

task :minify do
	desc "requires java. uses yui min on dist/oatlib.debug.js. this is out of the scope of this Rakefile, but i put it here because the whole point of this weird build process is to optimize yui compressors performance"
	system 'java -jar ' + File.join(LIBRARY_ROOT,'yuicompressor.jar') + ' -o ' + File.join(LIBRARY_ROOT,'dist','oatlib.min.js') + ' ' + File.join(LIBRARY_ROOT,'dist','oatlib.debug.js')
end
