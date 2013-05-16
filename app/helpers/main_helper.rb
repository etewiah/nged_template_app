module MainHelper
  def clippings_link
    "javascript:(function() {d=document, w=window, e=w.getSelection, k=d.getSelection, x=d.selection, s=(e?e():(k)?k():(x?x.createRange().text:0)), e=encodeURIComponent, document.location='/new_clipping?uri='+e(document.location)+'&title='+e(document.title)+'&selection='+e(s);} )();"    
  end

  def facebook_js
  	javascript_tag("
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;

    js.src = '//connect.facebook.net/en_US/all.js#xfbml=1&appId=#{ENV['FACEBOOK_KEY']}';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  		")
  end

  def twitter_js
  	javascript_tag("
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
			if(!d.getElementById(id)){js=d.createElement(s);
			js.id=id;js.src='//platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js,fjs);}}(document,'script','twitter-wjs');
  		")
  end

  def google_plusone_js
  	javascript_tag("

  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
  		")
  end

	def google_analytics_js
	  javascript_tag("

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '#{ENV['GOOGLE_ANALYTICS_ACT']}' ]);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

	  ")
	end

end
