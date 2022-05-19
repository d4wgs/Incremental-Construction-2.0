var a001 = Math.floor(Math.random() * 10);
        var a002 = Math.floor(Math.random() * 10);
        var a003 = a001 + a002;

        window.onload = function begin001() {
            message001.innerHTML = a001 + " + " + a002 + " =";
            message002.innerHTML = "<input type=text id=input001 /> <button onclick=check001()>Check</button>";
        }

        function check001() {
            var answer001 = input001.value;
            show001.innerHTML = answer001;
            if (answer001 == a003) {
                message003.innerHTML = "✓";
                message002.innerHTML = "";
                message004.innerHTML = "<button onclick=repeat001()>Next</button>";
            }
            else {
                message003.innerHTML = "✘";
                message002.innerHTML = "";
                message004.innerHTML = "<button onclick=repeat001()>Next</button>";
            }
        }

        function repeat001() {
            location.reload();
        }