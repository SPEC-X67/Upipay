/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
var parser = document.createElement('a');
parser.href = new URLSearchParams(location.search);

function hideF() {
    document.getElementById("outputd").style.display = "none";
    document.getElementById("invalid").style.visibility = "hidden";
}

// function genLink() {
//     if (vpa.value.indexOf("@") != -1) {
//         document.getElementById("outputd").style.display = "block";
//         document.getElementById("inputd").style.display = "none";
//         document.getElementById("copiedtext").style.visibility = "hidden";
//         var amountset = document.getElementById("amount").value;
//         var vpaset = document.getElementById("vpa").value;
//         if (amountset == "") {
//             var linkset = "https://" + parser.hostname + "/pay?vpa=" + vpaset;
//             document.getElementById("outlink").value = linkset;
//             document.getElementById("outlink").select();
//         } else {
//             var linkset = "https://" + parser.hostname + "/pay?vpa=" + vpaset + "&amount=" + amountset;
//             document.getElementById("outlink").value = linkset;
//             document.getElementById("outlink").select();
//         }
//     } else {
//         document.getElementById("invalid").style.visibility = "visible";
//         document.getElementById("vpa").value = "";
//     }
// }

function genLink() {
    let vpa = document.getElementById("vpa").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (vpa.includes("@")) {
        // build the URL
        let baseUrl = "https://" + window.location.hostname + "/pay?vpa=" + encodeURIComponent(vpa);
        if (amount) {
            baseUrl += "&amount=" + encodeURIComponent(amount);
        }

        window.location.href = baseUrl;
    } else {
        document.getElementById("invalid").style.visibility = "visible";
    }
}


function copyLink() {
    var copyText = document.getElementById("outlink");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copiedtext").style.visibility = "visible";
}

function share() {
    if (navigator.share) {
        navigator.share({
                title: 'Share | Upier',
                text: "*Upier* \n\nShareable Secure Payment's Link for UPI :\n",
                url: window.location.href
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(err => {
                console.log(`Couldn't share because of`, err.message);
            });
    } else {
        console.log('web share not supported');
    }
}

if (parser.hostname !== "upier.t-ps.net") {
    window.location.href = "#domainExpiring";
}


/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */
