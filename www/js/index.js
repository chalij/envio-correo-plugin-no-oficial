      var app = {
        // Application Constructor
        initialize: function() {
            this.bindEvents();
        },
        // Bind Event Listeners
        //
        // Bind any events that are required on startup. Common events are:
        // 'load', 'deviceready', 'offline', and 'online'.
        bindEvents: function() {
            document.addEventListener('deviceready', this.onDeviceReady, false);
        },
        // deviceready Event Handler
        //
        // The scope of 'this' is the event. In order to call the 'receivedEvent'
        // function, we must explicity call 'app.receivedEvent(...);'
        onDeviceReady: function() {
            app.receivedEvent('deviceready');
            sendmail.send(app.sendMailSuccess, app.sendMailError,
                    'Correo enviado con Cordova',
                    'Este es un ejemplo de correo enviado con Cordova', 
                    'chalijosuefranco@gmail.com', 'master22',
                    'chalijosuefranco@gmail.com');
                    $( ".ui-btn-right" ).bind( "click", function(event, ui) {
                        sendmail.send(app.sendMailSuccess, app.sendMailError,
                                'Correo enviado con Cordova',
                                'Este es un ejemplo de correo enviado con Cordova2', 
                                'chalijosuefranco@gmail.com', 'master22',
                                'chalijosuefranco@gmail.com');
                    });
        },
        sendMailSuccess : function() {
            var estado = document.getElementById('estado');
            estado.innerHTML = '<p>Correo enviado</p>';
        },
        sendMailError : function(error) {
            var estado = document.getElementById('estado');
            estado.innerHTML = '<p>Correo NO enviado:' + error + '</p>';
        },
        // Update DOM on a Received Event
        receivedEvent: function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');
 
            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
 
            console.log('Received Event: ' + id);
        }
      };
     /* function enviarCorreo()
      {
          
      }*/