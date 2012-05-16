// Generated by CoffeeScript 1.3.3

define(['underscore', 'chaplin', 'lib/utils'], function(_, Chaplin, utils) {
  'use strict';

  var ServiceProvider;
  return ServiceProvider = (function() {

    _(ServiceProvider.prototype).extend(Chaplin.Subscriber);

    ServiceProvider.prototype.loading = false;

    function ServiceProvider() {
      /*console.debug 'ServiceProvider#constructor'
      */
      _(this).extend($.Deferred());
      utils.deferMethods({
        deferred: this,
        methods: ['triggerLogin', 'getLoginStatus'],
        onDeferral: this.load
      });
    }

    ServiceProvider.prototype.disposed = false;

    ServiceProvider.prototype.dispose = function() {
      /*console.debug 'ServiceProvider#dispose'
      */
      if (this.disposed) {
        return;
      }
      this.unsubscribeAllEvents();
      this.disposed = true;
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    return ServiceProvider;

  })();
  /*
  
      Standard methods and their signatures:
  
      load: ->
        # Load a script like this:
        utils.loadLib 'http://example.org/foo.js', @loadHandler, @reject
  
      loadHandler: =>
        # Init the library, then resolve
        ServiceProviderLibrary.init(foo: 'bar')
        @resolve()
  
      isLoaded: ->
        # Return a Boolean
        Boolean window.ServiceProviderLibrary and ServiceProviderLibrary.login
  
      # Trigger login popup
      triggerLogin: (loginContext) ->
        callback = _(@loginHandler).bind(this, loginContext)
        ServiceProviderLibrary.login callback
  
      # Callback for the login popup
      loginHandler: (loginContext, response) =>
  
        if response
          # Publish successful login
          mediator.publish 'loginSuccessful', {provider: this, loginContext}
  
          # Publish the session
          mediator.publish 'serviceProviderSession',
            provider: this
            userId: response.userId
            accessToken: response.accessToken
            # etc.
  
        else
          mediator.publish 'loginFail', {provider: this, loginContext}
  
      getLoginStatus: (callback = @loginStatusHandler, force = false) ->
        ServiceProviderLibrary.getLoginStatus callback, force
  
      loginStatusHandler: (response) =>
        return unless response
        mediator.publish 'serviceProviderSession',
          provider: this
          userId: response.userId
          accessToken: response.accessToken
          # etc.
  */

});
