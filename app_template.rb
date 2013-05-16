# below based on:
# https://raw.github.com/nate/bare-rails-template/master/app_template.rb
# and
# https://github.com/paulsutcliffe/digitalocean-rails/blob/master/app_template.rb

# create fresh git repo
git :init
git :add    => '.'
git :commit => '-a -m "fresh rails app"'

# include gems
gem 'rspec', :group => [:test, :development]
gem 'rspec-rails', :group => [:test, :development]
run 'bundle install'

# run 'capify .'
# remove_file 'config/deploy.rb'

# remove_file ".gitignore"
# file ".gitignore", <<-END
# /log/*.log
# /tmp/**/*
# /config/*.yml
# /.rvmrc
# .DS_Store
# /.bundle
# /config/deploy.rb
# END


# run rspec generators
generate 'rspec:install'

# create rspec.rb in the config/initializers directory to use rspec as the default test framework
initializer 'rspec.rb', <<-EOF
  Rails.application.config.generators.test_framework :rspec
EOF

# # download latest unobtrusive rails adapter for jquery 
# get 'http://github.com/rails/jquery-ujs/raw/master/src/rails.js', 'public/javascripts/rails.js'

# # create jquery.rb in the config/initializers directory to use jquery as the default javascript framework
# initializer 'jquery.rb', <<-EOF
#   Rails.application.config.action_view.javascript_expansions[:defaults] = %w(http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js rails)
# EOF

# commit 
git :add => "."
git :commit => '-a -m "add rspec"'


# if yes? "Do you want to generate a root controller?(yes/no)"
#   name = ask("What should it be called?").underscore
#   generate :controller, "#{name} index"
#   route "root to: '#{name}\#index'"
#   remove_file "public/index.html"
# end

generate :controller, "main index --skip-javascripts"
route "root to: 'main\#index'"
remove_file "public/index.html"

run "mkdir -p app/assets/javascripts/angular/controllers \
           app/assets/javascripts/angular/directives \
           app/assets/javascripts/angular/filters \
           app/assets/javascripts/angular/models \
           app/assets/javascripts/angular/services"

run "wget --no-check-certificate 'https://raw.github.com/paulsutcliffe/digitalocean-rails/master/public/humans.txt' -O public/humans.txt"
         
# run "wget http://code.angularjs.org/1.0.6/angular.js -P vendor/assets/javascripts"
# wget http://code.angularjs.org/1.0.6/angular-resource.js -P vendor/assets/javascripts
# # gem 'angular-rails-engine'