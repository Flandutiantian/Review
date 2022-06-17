< !DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                    <title>JS Bin</title>
                </head>
                <body>
                    <div id="xxx"></div>
                    <script> var dragging = false
                        var position = null
                        xxx.addEventListener('mousedown',function(e){
                            dragging = true 
                            position = [e.clientX, e.clientY] 
                            })

                        document.addEventListener('mousemove', function(e){
                         if(dragging === false){return}
                        console.log('hi')
                        
                               })
                        document.addEventListener('mouseup', function(e){
                            dragging = false
                        })
                    </script>
                </body>
            </html>