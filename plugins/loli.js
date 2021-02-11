var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
var nime = items[Math.floor(Math.random() * items.length)];
var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image
