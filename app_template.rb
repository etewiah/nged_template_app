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

remove_file "app/views/main/index.html.erb"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/app/views/main/index.html.erb' -O app/views/main/index.html.erb"

remove_file "helpers/main_helper.rb"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/helpers/main_helper.rb' -O helpers/main_helper.rb"

run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/app/views/main/_top_bar.html.erb' -O app/views/main/_top_bar.html.erb"

run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/config/mongoid.yml' -O config/mongoid.yml"
run "wget --no-check-certificate 'https://raw.github.com/angular-ui/angular-ui/master/build/angular-ui.js' -O vendor/assets/javascripts/angular-ui.0.4.0.js"

run "wget http://code.angularjs.org/1.0.6/angular.js -O vendor/assets/javascripts/angular.1.0.6.js"
run "wget http://code.angularjs.org/1.0.6/angular-scenario.js -O vendor/assets/javascripts/angular-scenario.1.0.6.js"
run "wget http://code.angularjs.org/1.0.6/angular-resource.js  -O vendor/assets/javascripts/angular-resource.1.0.6.js"
run "wget http://code.angularjs.org/1.0.6/angular-sanitize.js  -O vendor/assets/javascripts/angular-sanitize.1.0.6.js"


# wget http://code.angularjs.org/1.0.6/angular-resource.js -P vendor/assets/javascripts
# # gem 'angular-rails-engine'

gem "jasminerice", :group => [:development, :test]
gem "gon"
gem "figaro"
# gem "quiet_assets"
gem "capistrano"
gem "yaml_db"
gem "mongoid"
gem "active_model_serializers"

  # get rid of logging: WARN  Could not determine content-length of response body.
gem 'thin'

gem "unicorn"

gem 'zurb-foundation', '~> 4.0.0', :group => [:assets]
run 'bundle install'


remove_file "views/layouts/application.html.erb"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/views/layouts/application.html.erb' -O views/layouts/application.html.erb"


git :add => "."
git :commit => '-a -m "add gems and create main index"'



# run foundation generators
generate 'foundation:install'

# rails g foundation:install

run "mkdir -p app/assets/javascripts/ng/controllers \
           app/assets/javascripts/ng/directives \
           app/assets/javascripts/ng/filters \
           app/assets/javascripts/ng/models \
           app/assets/javascripts/ng/services \
           spec/karma/controllers \
           spec/karma/e2e"

run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/spec/karma/karma_e2e.conf.js' -O spec/karma/karma_e2e.conf.js"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/spec/karma/karma.conf.js' -O spec/karma/karma.conf.js"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/app/assets/javascripts/ng/ng_app.js' -O app/assets/javascripts/ng/ng_app.js"
run "wget --no-check-certificate 'https://raw.github.com/etewiah/nged_template_app/master/app/assets/javascripts/application.js' -O app/assets/javascripts/application.js"



#Setup the database
# run "rm config/database.yml"

# db_user = ask("Please enter your local mysql user")
# db_password = ask("Please enter your local mysql password")

# file "config/database.yml", <<-CODE
# defaults: &defaults
#   adapter: mysql2
#   encoding: utf8
#   reconnect: false
#   pool: 5
#   username: #{db_user}
#   password: #{db_password}
#   socket: /tmp/mysql.sock

# development:
#   database: #{app_name.camelize(:lower)}_development
#   <<: *defaults

# test: &test
#   database: #{app_name.camelize(:lower)}_test
#   <<: *defaults

# production:
#   host: localhost
#   database: #{app_name.camelize(:lower)}_production
#   <<: *defaults
# CODE

# rake "db:create"