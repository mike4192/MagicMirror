/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	electronOptions: {
		webPreferences: {
			webviewTag: true,
		},
	},
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
			classes: 'always'
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'always'
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'always',
			config: {
				timezone: "America/New_York",
				showWeek: true,
				showSunTimes: true,
				lat: 42.421689,
				lon: -71.186768,
			}
		},
		{
			module: "calendar",
			header: "Mike's Calendar",
			position: "top_left",
			classes: 'default mike',
			config: {
				maximumEntries: 6,
				showEnd: false,
				timeFormat: "absolute",
				dateFormat: "ddd MMM Do",
				urgency: 1,
				fullDayEventDateFormat: "ddd MMM Do",
				fade: true,
				fadePoint: 0.5,
				fetchInterval: 3600000, //1 hr in ms
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/michael.romanko%40gmail.com/private-f5fde1505f454e0b2c1ae1039ec5a90f/basic.ics"
					},
					{
						symbol: "calendar-day",
						url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "calendar",
			header: "Maggies's Calendar",
			position: "top_left",
			classes: 'maggie',
			config: {
				maximumEntries: 6,
				showEnd: false,
				timeFormat: "absolute",
				dateFormat: "ddd MMM Do",
				urgency: 1,
				fullDayEventDateFormat: "ddd MMM Do",
				fade: true,
				fadePoint: 0.5,
				fetchInterval: 3600000, //1 hr in ms
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/mmaggie12%40gmail.com/private-3cca029b1549cd2979e98a2bc93aa59d/basic.ics"
					},
				]
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	classes: 'always',
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "current",
		// 		location: "Arlington, MA",
		// 		locationID: "4929180", // Arlington
		// 		// locationID: "5100356", //NJ
		// 		apiKey: "bfa59d8169bc5ea02ced090c70af8bc8",
		// 		showSun: false
		// 	}
		// },
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	header: "Weather Forecast",
		// 	classes: 'always',
		// 	config: {
		// 		weatherProvier: "openweathermap",
		// 		type: "forecast",
		// 		location: "Arlington, MA",
		// 		//locationID: "4929180", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "bfa59d8169bc5ea02ced090c70af8bc8",
		// 		lat: 42.42048,
		// 		lon: -71.18697,
		// 		roundTemp: true,
		// 		weatherEndpoint: '/onecall',
		// 		maxNumberOfDays: 8,
		// 		maxEntries: 8,
		// 		fadePoint: 0.80,
		// 		showPrecipitationAmount: true,
		// 		rainThreshold: 0.1,
		// 		snowThreshold: 0.05
		// 	}
		// },
		{
			module: "MMM-OpenWeatherMapForecast",
			position: "top_right",
			header: "",
			classes: 'always',
			config: {
				apikey: "bfa59d8169bc5ea02ced090c70af8bc8",
				latitude: "42.42048",
				longitude: "-71.18697",
				showCurrentConditions: true,
				forecastHeaderText: "Arlington, MA Forecast",
				maxDailiesToShow: 3,
				concise: true,
				forecastLayout: "tiled",
				useAnimatedIcons: true,
				requestDelay: 500,
				units: "imperial"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: 'default',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: false,
				broadcastNewsUpdates: false,
				reloadInterval: 3600000
			}
		},
		{
			module: 'calendar_monthly',
			position: 'top_left',
			classes: 'always',
			config: {
			}
		},
		{
			module: 'MMM-PIR-Sensor',
			config: {
				sensorPin: 17,
				sensorState: 1,
				powerSaving: true,
				powerSavingDelay: 90,
			}
		},
		{
			module: 'MMM-WebView',
			position: 'bottom_center',
			classes: 'mike',
			config: {
			  url: 'https://www.wunderground.com/forecast/us/ma/arlington/42.42,-71.17',
			  width: '950px',
			  height: '450px',
			  loadedJS: 'scroll(0,445);',
			  autoRefresh: true,
			  autoRefreshInterval: 3*60*60*1000
			},
		},
		{
			module: 'MMM-Face-Reco-DNN',
			config: {
			  // Logout some seconds after user was not detected any more
			  // If they are detected within this period, the delay will start again
			  logoutDelay: 20000,
			  // How often the recognition starts in milliseconds
			  // With a Raspberry Pi 3+ it works well every 2 seconds
			  checkInterval: 500,
			  // Module set used for when there is no face detected ie no one is in front of the camera
			  noFaceClass: 'noface',
			  // Module set used for when there is an unknown/unrecognised face detected
			  unknownClass: 'unknown',
			  // Module set used for when there is a known/recognised face detected
			  knownClass: 'known',
			  // Module set used for strangers and if no user is detected
			  defaultClass: 'default',
			  // Set of modules which should be shown for any user ie when there is any face detected
			  everyoneClass: 'everyone',
			  // Set of modules that are always shown - show if there is a face or no face detected
			  alwaysClass: 'always',
			  // XML to recognize with haarcascade
			  cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			  // Pre-encoded pickle with the faces
			  encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			  // Use Raspberry Pi camera or another type
			  // 1 = RasPi camera, 0 = other camera
			  usePiCamera: 1,
			  // If using another type of camera, you can choose
			  // i.e. 0 = /dev/video0 or 'http://link.to/live'
			  source: 0,
			  // Rotate camera
			  rotateCamera: 270,
			  // Method of facial recognition
			  // dnn = deep neural network, haar = haarcascade
			  method: 'dnn',
			  // Which face detection model to use
			  // "hog" is less accurate but faster on CPUs
			  // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
			  detectionMethod: 'hog',
			  // How long in milliseconds modules take to hide and show
			  animationSpeed: 1000,
			  // Path to Python to run the face recognition
			  // null or '' means default path
			  pythonPath: '/home/pi/.local/bin/.virtualenvs/cv/bin/python3',
			  // Should a welcome message be shown using the MagicMirror alerts module?
			  welcomeMessage: true,
			  // Dictionary for person name mapping in welcome message
			  // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
			  usernameDisplayMapping: null,
			  // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
			  // So you can extend your dataset and retrain it afterwards for better recognitions
			  extendDataset: false,
			  // If extendDataset is true, you need to set the full path of the dataset
			  dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			  // How much distance between faces to consider it a match. Lower is more strict.
			  tolerance: 0.5,
			  // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
			  multiUser: 0,
			}
		},
		{
			module: "MMM-RAIN-MAP",
			position: "lower_third",
			classes: 'mike',
			config: {
				animationSpeedMs: 400,
				colorScheme: 1,
				colorizeTime: true,
				defaultZoomLevel: 8,
				displayTime: true,
				displayTimeline: true,
				displayClockSymbol: true,
				displayOnlyOnRain: true,
				extraDelayLastFrameMs: 1000,
				extraDelayCurrentFrameMs: 3000,
				markers: [
					{ lat: 42.42048, lng: -71.18697, color: "green" },
				],
				mapPositions: [
					{ lat: 42.42048, lng: -71.18697, zoom: 8, loops: 1 }, // Arlington
					// { lat: 40.29, lng: -74.73, zoom: 8, loops: 1 }, // NJ
				],
				mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
				mapHeight: "420px", // must be a pixel value (no percent)
				mapWidth: "420px", // must be a pixel value (no percent)
				maxHistoryFrames: -1,
				maxForecastFrames: -1,
				substitudeModules: [],
				updateIntervalInSeconds: 300,
			}
		},
		{
			module: "MMM-CountUP",
			position: "bottom_bar",
			classes: 'maggie',
			config: {
			  header: '',
			  title: 'You\'ve been dating your cutie for ...',
			  date: '2018-12-02',
			  time: '00:00:00',
			  showFullDate: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
