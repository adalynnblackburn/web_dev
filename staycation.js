function toggleContent(){
                var box = document.getElementById("button-part");
                var btn = document.getElementById("button");
                if (box.style.display == "none") {
                    box.style.display = "block";
                    btn.textContent = "Hide";
                } else {
                    box.style.display = "none";
                    btn.textContent = "Things to do in Bear Lake!";
                }
            }
function change(){
    document.getElementById("bearlakeimg1").src="https://www.yamahawaverunners.com/globalassets/z-old/_waverunners/destinations/destinations---bear-lake---idaho.jpg"
}