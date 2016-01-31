# Introduction
**World of Warcraft Guild Roster Application**

This is a small application that will allow you to process your guild members and display your raid team in real time. Inside this package you will find files both for developers and for consumers with no coding experience required.  

This application is currently in **Version 0.12.1** and as a result is simply a foundation build with minimal features. Such as guild filtering, gear checking, front-end view and basic mobile support.

**Requirements:**
* Access to basic webhosting of HTML, CSS and Javascript files
* Access to a WoW APIKey from Blizzard (Free, more info below)

**Developer Requirements:**
* Node.JS with Node Package Manager - **0.10.33**
* HTML, CSS, Javascript Knowalge
* Unix OS that supports MAKE (Linux, Mac)

**Future Update Plans:**
* Clean up code and modules
* Introduce Guild Youtube Channel Support
* Introduce Guild Screenshot Support
* Better Overlay - More gear / character information
* Better member filter options
* Better mobile optimizations
* Introduce SASS
* Better Unit Tests
* rebuild using reactJS

## Installing and Setup
### Setting up the application
To start using this application you will need an API key from blizzard (https://dev.battle.net/member/register).

Once you have registered and requested an API key you can come back to this application and open:

```
/src/dist/config.json
```

You will find this block of code at the top:

```
"APIKey" : "",
"region": "https://eu.api.battle.net"
```

* Inside the **""** you will want to add the API key for the APIKey field.
* You may want to change your region depending which WoW you play.

Next you will want to configure that the correct guild loads.

```
"guildSettings": {
		"guild": "emerald-dream/sunfall",
		"raidIlevel": 700,
		"levelFilter": 100,
		"rankFilter": 0,
		"rankFilter2": 1,
		"rankFilter3": 6,
		"rankFilter4": 6,
		"rankFilter5": 6,
		"rankFilter6": 6
	},
```

**Guild:**
```
"guild": "emerald-dream/sunfall",
```
The API requires that **REALM/GUILD-NAME** is correct, in this case my realm is **Emerald Dream** and my Guild is **Sunfall**


**Raid Minimal Item Level:**
```
"raidIlevel": 700,
```

This field is to filter out the guild members that do NOT meet this requirement (Item Level). This is how we filter the members to see which ones are potentially in our raid team. This makes the application much faster as well, but tweak this to meet your requirements.

**Raid Min Level:**
```
"levelFilter": 100,
```

This is the main filter point that filters out the large majority of the Guild Roster, we only want to filter Max-Level members from the roster. This makes the application much faster as well, but tweak this to meet your requirements.

**Rank Filtering:**
```
		"rankFilter": 0,
		"rankFilter2": 1,
		"rankFilter3": 6,
		"rankFilter4": 6,
		"rankFilter5": 6,
		"rankFilter6": 6
```

This allows you to customize the application further, by displaying members of certain ranks only. This differs per guild so i would recommend checking your guild rank system and seeing which members you wish to display. For my guild this would be **Guild Leader, Rank0** | **Guild Officers, Rank1** | **Guild Members, Rank6**. The other ranks for me do not have much use. Such as Alts, Guild Bank Character etc etc. But again please configure to how you use and setup your guild.

**Guild Progress:**
```
"guildInfo": {
		"poster": "hfc.jpg",
		"currentRaid": "Mythic Hellfire Citadel",
		"progress": "5/13",
		"recruiting": true,
		"website": "http://www.sunfall.eu",
		"desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper massa ut mi cursus cursus. Integer molestie velit sed libero facilisis, id blandit quam congue. Nunc scelerisque gravida dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis pharetra neque ut mauris eleifend mollis pulvinar in enim. Quisque ultrices fermentum lacus, id lacinia risus aliquet sit amet. Aliquam non sapien molestie, gravida dolor congue, pharetra tortor. Suspendisse commodo dui in rutrum tempor. Nullam accumsan condimentum dolor et semper.",
		"desc2": "Nam pellentesque at lectus rutrum facilisis. Sed sit amet dignissim ante, quis suscipit ipsum. In luctus vitae est id sagittis. Nam suscipit nulla eget ante ultrices ultrices. Vestibulum ac purus at nulla gravida ultrices sit amet eget tortor. Vivamus ornare felis vitae lacus blandit posuere. Fusce neque lacus, aliquet at viverra a, fermentum vel odio. Donec eget euismod mi, vitae scelerisque mauris."
	}
```

Here you will enter a 2 paragraph summary or recruitment information of your guild, enable guild recruitment and showcase your guilds progress.


### Installing / Using the Application
to start using this application you will want to upload everything in the **/src/dist/** folder to your server / website.

You can then start using the application by opening the **index.html** inside your web browser.

# Defects and Feature requests

There is bound to be bugs, issues or things disliked about this application. For any such things please email me at **sjones243@gmail.com**

# Tweaking and Modifying the application (For Developers)
Navigate to this project where you pulled it, you will then need to run an NPM Install to install all the required Dependencies.

```
npm install
```

# Unit Testing (For Developers)
The Application has a few different test types:

* Compliance to coding standards
* Code documentation checks
* Functional testing using Mocha
* Code coverage testing using Istanbul, with a minimum required coverage of 95%

All these tests can be started through the Makefile:
```
make test
```

# Building the Application (For Developers)
Once you have made modification to the application, you can build it to see your changes.

```
make build
```
