require 'rake'
require 'rake/packagetask'

LIBRARY_ROOT = File.expand_path(File.dirname(__FILE__))
YUI_COMPRESSOR_ROOT = File.join(LIBRARY_ROOT,'yuicompressor.jar')
NATURAL_DOCS_DIR = File.join(LIBRARY_ROOT,'..','natural_docs')

def sprocketize(load_path, sources,asset_path = nil)
  begin
    require "sprockets"
  rescue LoadError => e
    puts "\nYou'll need Sprockets to build oatlib\n\n"
  end
  
  secretary = Sprockets::Secretary.new(
    :root => LIBRARY_ROOT,
    :load_path => load_path,
    :source_files => sources,
		:asset_root => asset_path
  )

	if !asset_path.nil?
		puts "\ndoin them assets in " + asset_path
		secretary.install_assets
	else
		secretary.concatenation.to_s.split(/\n/)
	end
end

def neutralize_literals(line)
	line.gsub(/('[^']+'|\/[^\/]+\/|"[^"]+")/) {|literal|
		literal[0,1] + literal[0,literal.length - 2].gsub(/./,'b') + literal[literal.length - 1,1]
	}
end

# frickt
def handle_prototypal_references(src)
	return src.map { |line|
		line.gsub(/\[o\.([^\]]*)\]/) {|thing|
			'[$$_o$' + $1.gsub(/\./,'_') + ']'
		}
	}
end

def handle_constants(src)
	# not working. needs to ignore regexs
	hash_of_symbols = Hash.new
	return src

	src.each do |line|
		neutralized = neutralize_literals(line)
		matches = neutralized.scan(/\b(true|RegExp|false|window|document|null|String|undefined|Array|Function|Object|Date|Number|Boolean|parseInt|parseFloat|Math)\b/)
		matches && matches.map {|array| array[0]}.each do |symbol_name|
			hash_of_symbols[symbol_name] = hash_of_symbols[symbol_name] ? hash_of_symbols[symbol_name] + 1 : 1
		end
	end

	ones_to_replace = []
	hash_of_symbols.each {|name,count|
		unsymbolized_cost = count * name.length
		symbolized_cost = 4 + name.length + count
		if [symbolized_cost,unsymbolized_cost].min == symbolized_cost
			ones_to_replace.push(name)
		else
		end
	}

	return src.map do |line|
		replaced_line = line
		ones_to_replace.each do |symbol_name|
			replaced_line = replaced_line.gsub(Regexp.new('\\b'+symbol_name+'\\b'),'$$'+symbol_name)
		end

		matches = line.scan(/('[^']+'|\/[^\/]+\/|"[^"]+")/).map {|array| array[0]}
		neutralized_line = neutralize_literals(replaced_line)
		count = -1
		neutralized_line.gsub(/('b+'|\/b+\/|"b+")/) {|literal| 
			count += 1
			matches[count]
		}

	end

end

def pre_symbolize(but_src)

	hash_of_symbols = Hash.new
	#src = handle_prototypal_references(handle_constants(but_src))
	src = handle_constants(but_src)

	src.each do |line|
		neutralized = neutralize_literals(line)
		matches = neutralized.scan(/\.([$_A-Za-z][A-Za-z0-9$_]*)/)
		matches && matches.map {|array| array[0]}.each do |symbol_name|
			hash_of_symbols[symbol_name] = hash_of_symbols[symbol_name] ? hash_of_symbols[symbol_name] + 1 : 1
		end
	end
	

	ones_to_replace = []
	hash_of_symbols.each {|name,count|
		unsymbolized_cost = count * (name.length + 1)
		symbolized_cost = (4 + 1 + 4 + name.length) + (count * 3)
		if [symbolized_cost,unsymbolized_cost].min == symbolized_cost
			ones_to_replace.push(name)
		else
		end
	}

	return src.map do |line|
		#puts 'processing line: ' + line
		replaced_line = line
		#puts 'about to process ' + ones_to_replace.length.to_s + ' symbols'
		ones_to_replace.each do |symbol_name|
			#puts 'replacing ' + symbol_name + ' instances found in line'
			replaced_line = replaced_line.gsub(Regexp.new('\.'+symbol_name+'\\b'),'[$'+symbol_name+']')
		end

		matches = line.scan(/('[^']+'|\/[^\/]+\/|"[^"]+")/)
		#puts 'looking for matches. . . ' + matches.length.to_s + ' found'
		neutralized_line = neutralize_literals(replaced_line)
		#puts 'neutralizing the line'
		#puts 'neutered line: ' + neutralized_line
		count = -1
		neutralized_line.gsub(/('b+'|\/b+\/|"b+")/) {|literal| 
			count += 1
			matches[count]
		}

	end

end

def symbolize(src)
	symbols = [] # holds 'symbols' found in js
	codeLines = [] # holds every line, to be written out later
	results = []

	pre_symbolize(src).each do |line|
		matches = line.scan(/\$(\$?_?[A-Za-z][A-Za-z0-9$_]*)/)
		matches && matches.map {|array| array[0]}.each do |symbol|
			symbols.push(symbol) # record any symbols in the array
		end
		codeLines.push(line) # record every line for use later
	end

	results.unshift('(function () {')
	results.push([symbols.uniq.inject('var ') {|symbols, symbol| [symbols,'$',symbol,symbol =~ /^\$_(.*)/ && '' || symbol =~ /^\$(.*)/ && [' = ',$1].join() || [" = '",symbol,"'"].join(),', '].join()},"empty_string = '';"].join())
	results.concat(codeLines)
	results.push('}).apply(this);')

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
	Rake::Task['build_all_tests'].invoke
	Rake::Task['build_all'].invoke
end

task :build_tests, [:module_string] => [:build] do |t, args|
	desc "pass a list of modules to build tests for: rake build_tests[\"functional dom dom-effects\"] (units.js results in the dist/tests dir; this will build oatlib with those modules first)"
	modules = args.module_string.split(' ').unshift('core').collect {|module_name| File.join('units',module_name + '.tests.js') }
	puts modules
	sprocketized_src = sprocketize(['src','units'],modules)
	dist(File.join(LIBRARY_ROOT,'dist','tests','units.js'),sprocketized_src)
	sprocketized_src = sprocketize(['src','units'],modules,File.join(LIBRARY_ROOT,'dist','tests'))
	Rake::Task['minify'].invoke
end

task :build, :module_string do |t, args|
	desc "pass a list of modules to build oatlib for: rake build[\"event dom-effects date\"] (oatlib.debug.js results in the dist dir)"
	modules = args.module_string.split(' ').unshift('core').collect {|module_name| File.join('src',module_name + '.js') }
	sprocketized_src = sprocketize(['src'],modules)
	symbolized_src = symbolize(sprocketized_src)
	#symbolized_src = sprocketized_src
	dist(File.join(LIBRARY_ROOT,'dist','oatlib.debug.js'),symbolized_src)
	Rake::Task['minify'].invoke
end

task :build_all do
	desc "gets every js file in source and builds it all"
	modules = get_files_under_path(File.join(LIBRARY_ROOT,'src')).map {|x| x.sub(/\.js$/,' ') }.join
	puts "building modules: " + modules
	Rake::Task['build'].invoke(modules)
	Rake::Task['minify'].invoke
end

task :build_all_tests  do
	desc "gets every js ile in units and builds and builds tests for it"
	modules = get_files_under_path(File.join(LIBRARY_ROOT,'units')).map {|x| x.sub(/\.tests\.js$/,' ') }.join
	print modules
	Rake::Task['build_tests'].invoke(modules)
	Rake::Task['minify'].invoke
end

task :build_plugins, :module_string do |t, args|
	desc "pass a list of plugins to build oatlib for: rake build_plugin[\"oatlog\"] (oatlib.debug.js results in the dist dir)"
	modules = args.module_string.split(' ').collect {|module_name| File.join('plugins',module_name + '.js') }.unshift(File.join('src','core.js'))
	sprocketized_src = sprocketize(['src','plugins'],modules)
	symbolized_src = symbolize(sprocketized_src)
	#symbolized_src = sprocketized_src
	dist(File.join(LIBRARY_ROOT,'dist','oatlib.debug.js'),symbolized_src)
	sprocketized_src = sprocketize(['src','plugins'],modules,File.join(LIBRARY_ROOT,'dist','assets'))
	Rake::Task['minify'].invoke
end

def add_evil(my_file)

	prepend_string = '(function(){var evil=eval;'
	append_string = '})();'

	f = File.open(my_file, 'r')  
	file_data = f.read  
	f.close 

	f = File.open(my_file, 'w')  
	f.write(prepend_string)  
	f.write(file_data)
	f.write(append_string)  
	f.close 

end

task :minify do
	desc "requires java. uses yui min on dist/oatlib.debug.js. this is out of the scope of this Rakefile, but i put it here because the whole point of this weird build process is to optimize yui compressors performance"
	src = File.join(LIBRARY_ROOT,'dist','oatlib.debug.js')
	dest = File.join(LIBRARY_ROOT,'dist','oatlib.min.js')
	system 'java -jar ' + File.join(LIBRARY_ROOT,'yuicompressor.jar') + ' -o ' + dest + ' ' + src

	add_evil(src)
	add_evil(dest)

end

task :docs do
	cmd = File.join(NATURAL_DOCS_DIR,'NaturalDocs')+' -i '+File.join(LIBRARY_ROOT,'dist')+' -o HTML '+File.join(LIBRARY_ROOT,'docs')+' -p '+File.join(LIBRARY_ROOT,'natural_docs_proj')+' -r'
	puts cmd
	system(cmd)
end
