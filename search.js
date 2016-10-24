window.onload = function(){
	showMessageHandle.addMessageHandle();
};

var showMessageHandle = {
	addMessageHandle : function(){
		var oBtn = document.getElementById('myBtn');
		oBtn.addEventListener("click", (this.searchMessage).bind(this), false);
	},
	searchMessage : function(){
		var oCity = document.getElementById('myCity');
		var showResult = document.getElementById('result').getElementsByTagName('span');
		console.log(showResult.length);
		var cityName = oCity.value;
		console.log(cityName);
		$.ajax({
			url : "http://api.jisuapi.com/weather/query",
			type : 'GET',
			dataType : 'jsonp',
			data : {
				city : cityName,
				appkey : “***********************”
			},
			success : function(data){
				// console.log(data.result.date);
				// console.log(data.result.week);
				console.log(data);
				showResult[0].innerHTML = data.result.date;
				showResult[1].innerHTML = data.result.week;
				showResult[2].innerHTML = data.result.weather;
				showResult[3].innerHTML = data.result.temp;
				showResult[4].innerHTML = data.result.temphigh;
				showResult[5].innerHTML = data.result.templow;
				showResult[6].innerHTML = data.result.windspeed;
				showResult[7].innerHTML = data.result.winddirect;
				showResult[8].innerHTML = data.result.windpower;
				showResult[9].innerHTML = data.result.hourly[0].time;
				showResult[10].innerHTML = data.result.hourly[0].weather;
				showResult[11].innerHTML = data.result.hourly[0].temp;
				showResult[12].innerHTML = data.result.aqi.pm2_5;
				showResult[13].innerHTML = data.result.aqi.quality;
				showResult[14].innerHTML = data.result.aqi.aqiinfo.affect;
				showResult[15].innerHTML = data.result.aqi.aqiinfo.measure;
				showResult[showResult.length-1].innerHTML = data.result.index[1].detail;
			}
		});
	}
};
