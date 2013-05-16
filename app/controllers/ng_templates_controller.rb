class NgTemplatesController < ActionController::Base
	# TODO - ensure cache works with multiple languages...
	caches_page :show


	# can't remember what I do to ensure this does not use a layout...
	def show
		render :template => "ng_templates/" + params[:path]
	end
end
