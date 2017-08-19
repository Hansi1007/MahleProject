 var mahle_globals = {};
/* hash-Trigger */
var doNotUpdateHash = false;
function hashRouter() {
	
	try {
		var triggered = false;
		var hash = window.location.hash;
		var thash = hash.substring(hash.lastIndexOf('#') + 1, hash.length);
		//wird vom init-Script mitgegeben, steuert, dass am Anfang auf jeden Fall der Router ausgef?hrt wird
		if (arguments[1]) {
			doNotUpdateHash = arguments[1];
		}
		if (doNotUpdateHash) {
			doNotUpdateHash = false;
			return;
		}
		if (thash) {
			var prefixes = ["accordion-"];
			for (x = 0, l = prefixes.length; x < l; x++) {
				//kompatibilität zwischen alter und neuer Welt wahren. alt: id.length == 25, neu id.length == 40
				var elm = $("#" + prefixes[x] + thash);
				
				if (elm.length > 0) {
					scrollTo(elm);
					elm.trigger("click");
					triggered = true;
					break;
				}
			}
		}
		//nur, wenn nichts getriggert wurde, also kein hash beim Laden der Seite mitkam
		if (!triggered && !arguments[1]) {
			$(".openOnStartup").trigger("click");
		}
	} catch (e) {}
}
function scrollTo(elm) {
	var sichtbarerBereich = $(window).scrollTop() + $(window).height();
	var scrTo = elm.offset().top;
	try {
		if(($(window).scrollTop() > scrTo) || (scrTo > sichtbarerBereich)) {
			setTimeout(function() {
				$("html, body").animate({  scrollTop: scrTo -20 });		
			}, 200);
		}
	} catch (e) {  }
}
/* /hash-Trigger */
/* Query for the browser version
 * *************************************/
function get_browser_info() {
	var ua = navigator.userAgent,
	tem,
	M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return {
			name : 'IE',
			version : (tem[1] || '')
		};
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/)
			if (tem != null) {
				return {
					name : 'Opera',
					version : tem[1]
				};
			}
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		M.splice(1, 1, tem[1]);
	}
	return {
		name : M[0],
		version : M[1]
	};
}
var browser = get_browser_info();

if(browser.version > 9 && browser.name.indexOf('IE') > -1) {document.documentElement.className+= 'ie' + browser.version;}

/* favicon dynamisch */
function changeFavicon(src) {
	try {
		var link = document.createElement('link'),
		oldLink = document.getElementById('favicon');
		link.id = 'favicon';
		link.rel = 'shortcut icon';
		link.href = src;
		if (oldLink) {
			document.head.removeChild(oldLink);
		}
		document.head.appendChild(link);
	} catch(e) {}
}



var cv = true;

//RewriteMap for accents
var defaultDiacriticsRemovalMap = [
		{'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
		{'base':'AA','letters':/[\uA732]/g},
		{'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
		{'base':'AO','letters':/[\uA734]/g},
		{'base':'AU','letters':/[\uA736]/g},
		{'base':'AV','letters':/[\uA738\uA73A]/g},
		{'base':'AY','letters':/[\uA73C]/g},
		{'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
		{'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
		{'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
		{'base':'DZ','letters':/[\u01F1\u01C4]/g},
		{'base':'Dz','letters':/[\u01F2\u01C5]/g},
		{'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
		{'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
		{'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
		{'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
		{'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
		{'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
		{'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
		{'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
		{'base':'LJ','letters':/[\u01C7]/g},
		{'base':'Lj','letters':/[\u01C8]/g},
		{'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
		{'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
		{'base':'NJ','letters':/[\u01CA]/g},
		{'base':'Nj','letters':/[\u01CB]/g},
		{'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
		{'base':'OI','letters':/[\u01A2]/g},
		{'base':'OO','letters':/[\uA74E]/g},
		{'base':'OU','letters':/[\u0222]/g},
		{'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
		{'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
		{'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
		{'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
		{'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
		{'base':'TZ','letters':/[\uA728]/g},
		{'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
		{'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
		{'base':'VY','letters':/[\uA760]/g},
		{'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
		{'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
		{'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
		{'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
		{'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
		{'base':'aa','letters':/[\uA733]/g},
		{'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
		{'base':'ao','letters':/[\uA735]/g},
		{'base':'au','letters':/[\uA737]/g},
		{'base':'av','letters':/[\uA739\uA73B]/g},
		{'base':'ay','letters':/[\uA73D]/g},
		{'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
		{'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
		{'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
		{'base':'dz','letters':/[\u01F3\u01C6]/g},
		{'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
		{'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
		{'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
		{'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
		{'base':'hv','letters':/[\u0195]/g},
		{'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
		{'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
		{'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
		{'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
		{'base':'lj','letters':/[\u01C9]/g},
		{'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
		{'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
		{'base':'nj','letters':/[\u01CC]/g},
		{'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
		{'base':'oi','letters':/[\u01A3]/g},
		{'base':'ou','letters':/[\u0223]/g},
		{'base':'oo','letters':/[\uA74F]/g},
		{'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
		{'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
		{'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
		{'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
		{'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
		{'base':'tz','letters':/[\uA729]/g},
		{'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
		{'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
		{'base':'vy','letters':/[\uA761]/g},
		{'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
		{'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
		{'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
		{'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
];

/* read URL params */
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

/* update world time clock */
function updateWtc() {
	var now = new Date(),
		h = now.getUTCHours(),
		m = now.getUTCMinutes(),
		t;
	if (m < 10) {
		m = "0" + m;
	}
	$('#clocklayer .clock .time').each(function() {
		t=eval(h + parseInt($(this).attr('data-wt')));		
		if (t >= 24) {
			t = t-24
		}		
		$(this).html(t + ':' + m);
	});	
	h = now.getHours();
	m = now.getMinutes();
	if (m < 10) {
		m = "0" + m;
	}
	$('.tools .clock .time').html(h + ':' + m);	
}

/* stage */
function cycleStage() {
	if ($('#stage .stage-menu').length > 0) {
		if ($('#stage .stage-menu li.active').next().length > 0) {
				$('#stage .stage-menu li.active').removeClass('active').next().addClass('active');
		}
		else {
			$('#stage .stage-menu li.active').removeClass('active');
			$('#stage .stage-menu li:first-child').addClass('active');
		}
	}	
	var $next;
	if ($('#stage .stage-slides > li.active').next().length > 0) {		
		$next = $('#stage .stage-slides > li.active').next();		
	}
	else {
		$next = $('#stage .stage-slides > li:first-child');
	}
	$next.fadeTo(1000,1, function() {
		$(this).addClass('active');
		$(this).show(); //Wichtig, sonst ist Link nicht klickbar
	});	
	$('#stage .stage-slides > li.active').fadeTo(1000,0, function() {
		$(this).hide().removeClass('active');		
		$(this).hide(); //Wichtig, sonst ist Link nicht klickbar
	});
}

function cycleContentStage() {
	if ($('#content-keyvisual-slider .stage-menu').length > 0) {
		if ($('#content-keyvisual-slider .stage-menu li.active').next().length > 0) {
				$('#content-keyvisual-slider .stage-menu li.active').removeClass('active').next().addClass('active');
		}
		else {
			$('#content-keyvisual-slider .stage-menu li.active').removeClass('active');
			$('#content-keyvisual-slider .stage-menu li:first-child').addClass('active');
		}
	}	
	var $next;
	if ($('#content-keyvisual-slider .stage-slides > li.active').next().length > 0) {		
		
		$next = $('#content-keyvisual-slider .stage-slides > li.active').next();		
	}
	else {
		$next = $('#content-keyvisual-slider .stage-slides > li:first-child');
	}
	$next.fadeTo(1000,1, function() {
		$(this).addClass('active');		
	});	
	$('#content-keyvisual-slider .stage-slides > li.active').fadeTo(1000,0, function() {
		$(this).hide().removeClass('active');		
	});
}

//Check input-data and set cookies
function setSettingsCookies() {
	if(parent != null && parent.location != window.location) {  //set data in cbox iframe only
		
		mahle_globals.settings = $.cookie('mahle_settings');
		
		if(parent.mahle_globals.cancel == true) { //check if cboxClose button has been clicked
			mahle_globals.cancel = true;
		}
		
		if(mahle_globals.cancel != true || mahle_globals.settings == null || mahle_globals.settings == "null") {

			mahle_globals.settings_location_home = $('#settings-form #footer .button.light').attr('href');
			
			mahle_globals.settings_country = $('select[name="country"]').find('option:selected').attr('data-rel'),
			mahle_globals.settings_location = $('select[name="city"]').find('option:selected').val(),
			mahle_globals.settings_sector = $('select[name="department"]').find('option:selected').attr('data-rel'),
			mahle_globals.settings_ess = "not defined", //$('input[name="ess"]').val(),
			mahle_globals.settings_ess_hide = $('input[name="hide-ess"]').is(':checked'),
			mahle_globals.settings_webmail = "not defined", //$('input[name="webmail"]').val(),
			mahle_globals.settings_webmail_hide = $('input[name="hide-webmail"]').is(':checked'),
			mahle_globals.settings_chat = "not defined",	//old: $('input[name="chat"]').val(),
			mahle_globals.settings_chat_hide = "not defined",	//old: $('input[name="hide-chat"]').is(':checked'),
			mahle_globals.settings_phonebook = "not defined", //$('input[name="phonebook"]').val(),
			mahle_globals.settings_phonebook_hide = $('input[name="hide-phonebook"]').is(':checked'),
			mahle_globals.settings_absence = $('select[name="absences"]').val(),
			mahle_globals.settings_absence_hide = $('input[name="hide-absences"]').is(':checked'),
			mahle_globals.settings_absence_ref = $('select[name="absences"] option:selected').attr('data-ref');
			mahle_globals.settings_webex = "not defined", //$('input[name="webex"]').val(),
			mahle_globals.settings_webex_hide = $('input[name="hide-webex"]').is(':checked'),
			mahle_globals.settings_languages = $('select.city option:selected').attr('data-languages'),
			mahle_globals.settings_email = $('input[name="email"]').val(),
			mahle_globals.settings_location_plantnumber = $('select[name="city"]').find('option:selected').attr('data-plantnumber'),
			mahle_globals.settings_sector_id = $('select[name="department"]').find('option:selected').attr('data-sectorid');
			
			mahle_globals.settings_myapp1 = $('input[name="myapp1"]').val(),
			mahle_globals.settings_myapp2 = $('input[name="myapp2"]').val(),
			mahle_globals.settings_myapp3 = $('input[name="myapp3"]').val();
			mahle_globals.settings_myapp1_text = $('input[name="myapp1_text"]').val(),
			mahle_globals.settings_myapp2_text = $('input[name="myapp2_text"]').val(),
			mahle_globals.settings_myapp3_text = $('input[name="myapp3_text"]').val();
			
			mahle_globals.settings_iap_hide = false; //set to false => will always be visible, b/c it can't be edited anymore $('input[name="hide-iap"]').is(':checked'); //IAP unused, but left for compatibility - MINTRA-622
			mahle_globals.settings_sso_hide = $('input[name="hide-sso"]').is(':checked');
			//put email into powerapp-links
			//mahle_globals.settings_ess = $('input[name="ess"]').attr('data-default-ref') + mahle_globals.settings_email;
			//mahle_globals.settings_webmail = $('input[name="webmail"]').attr('data-default-ref') + mahle_globals.settings_email;
			//mahle_globals.settings_phonebook = $('input[name="phonebook"]').attr('data-default-ref') + mahle_globals.settings_email;
		
			//Set default, if no cookie-data available
			if(parent.mahle_globals.setDefault == true) { //set default, if no cookie data available
				mahle_globals.setDefault = true;
			}
			
			if(mahle_globals.setDefault) {		
				mahle_globals.settings_string = "germany" + "|" + "Stuttgart" + "|" + mahle_globals.settings_sector + "|" + mahle_globals.settings_ess + "|" +
											mahle_globals.settings_ess_hide + "|" + mahle_globals.settings_webmail + "|" + mahle_globals.settings_webmail_hide + "|" +
											mahle_globals.settings_chat + "|" + mahle_globals.settings_chat_hide + "|" + mahle_globals.settings_phonebook + "|" + mahle_globals.settings_phonebook_hide + "|" + 
											mahle_globals.settings_absence + "|" + mahle_globals.settings_absence_hide + "|" + mahle_globals.settings_webex + "|" + mahle_globals.settings_webex_hide + "|" +
											mahle_globals.settings_languages + "|" + mahle_globals.settings_email + "|" + mahle_globals.settings_absence_ref + "|" +
											mahle_globals.settings_location_plantnumber + "|" + mahle_globals.settings_sector_id + "|" + mahle_globals.settings_myapp1 + "|" + mahle_globals.settings_myapp1_text + "|" + 
											mahle_globals.settings_myapp2 + "|" + mahle_globals.settings_myapp2_text + "|" + mahle_globals.settings_myapp3 + "|" + mahle_globals.settings_myapp3_text + "|" + mahle_globals.settings_iap_hide + "|" + mahle_globals.settings_sso_hide;
			}else{
				mahle_globals.settings_string = mahle_globals.settings_country + "|" + mahle_globals.settings_location + "|" + mahle_globals.settings_sector + "|" + mahle_globals.settings_ess + "|" +
											mahle_globals.settings_ess_hide + "|" + mahle_globals.settings_webmail + "|" + mahle_globals.settings_webmail_hide + "|" +
											mahle_globals.settings_chat + "|" + mahle_globals.settings_chat_hide + "|" + mahle_globals.settings_phonebook + "|" + mahle_globals.settings_phonebook_hide + "|" + 
											mahle_globals.settings_absence + "|" + mahle_globals.settings_absence_hide + "|" + mahle_globals.settings_webex + "|" + mahle_globals.settings_webex_hide + "|" +
											mahle_globals.settings_languages + "|" + mahle_globals.settings_email + "|" + mahle_globals.settings_absence_ref + "|" +
											mahle_globals.settings_location_plantnumber + "|" + mahle_globals.settings_sector_id  + "|" + mahle_globals.settings_myapp1 + "|" + mahle_globals.settings_myapp1_text + "|" + 
											mahle_globals.settings_myapp2 + "|" + mahle_globals.settings_myapp2_text + "|" + mahle_globals.settings_myapp3 + "|" + mahle_globals.settings_myapp3_text + "|" + mahle_globals.settings_iap_hide + "|" + mahle_globals.settings_sso_hide;
			}
														
			$.cookie('mahle_settings', decodeURIComponent(mahle_globals.settings_string), {path: '/', expires:365});								
			$.cookie('settings_location_home', mahle_globals.settings_location_home, {path: '/', expires:365});
			
		}
	}
}


function updateSettingsCheckbox(param, newElement) {
	$element = newElement;
	
	if(param == "true") {
		if ($element.parent().hasClass('active')) {
			$element.attr('checked', true);
		}else {
			$element.parent().addClass('active');
			$element.attr('checked', true);
		}
	}else{
		if ($element.parent().hasClass('active')) {
			$element.parent().removeClass('active')
			$element.attr('checked', false);
		}else {
			$element.attr('checked', false);
		}
	}
						
}

//Check cookie-data and fill out input fields
function getSettingsCookies() {
			
	var getCookie =  $.cookie('mahle_settings');
			
	if(getCookie != null) {
		var getValues = getCookie.split("|");
					
		mahle_globals.myCountry = getValues[0],
		mahle_globals.myLocation = getValues[1],
		mahle_globals.mySector = getValues[2],
		mahle_globals.myEss = getValues[3],
		mahle_globals.myEss_hide = getValues[4],
		mahle_globals.myWebmail = getValues[5],
		mahle_globals.myWebmail_hide = getValues[6],
		mahle_globals.myChat = getValues[7],
		mahle_globals.myChat_hide = getValues[8],
		mahle_globals.myPhonebook = getValues[9],
		mahle_globals.myPhonebook_hide = getValues[10],
		mahle_globals.myAbsence = getValues[11],
		mahle_globals.myAbsence_hide = getValues[12],
		mahle_globals.myAbsence_ref = getValues[17],
		mahle_globals.myWebex = getValues[13],
		mahle_globals.myWebex_hide = getValues[14],
		mahle_globals.myLanguages = getValues[15],
		mahle_globals.myEmail = getValues[16];
		
		mahle_globals.myApp1 = getValues[20],
		mahle_globals.myApp1_text = getValues[21],
		mahle_globals.myApp2 = getValues[22];
		mahle_globals.myApp2_text = getValues[23];
		mahle_globals.myApp3 = getValues[24];
		mahle_globals.myApp3_text = getValues[25];
		
		mahle_globals.myIAP_hide = getValues[26]; //IAP unused, but left for compatibility - MINTRA-622
		mahle_globals.mySSO_hide = getValues[27];
		
		$('input[name="email"]').val(mahle_globals.myEmail);
		
		$('select[name="city"]').val(mahle_globals.myLocation);
		
		mahle_globals.myRelCountry = $('select[name="country"] option[data-rel="'+mahle_globals.myCountry+'"]').text();
		$('select[name="country"]').val(mahle_globals.myRelCountry);
		
		mahle_globals.myRelSector = $('select[name="department"] option[data-rel="'+mahle_globals.mySector+'"]').text();
		$('select[name="department"]').val(mahle_globals.myRelSector);
		
		$('input[name="ess"]').val(mahle_globals.myEss);				
		$('input[name="hide-ess"]').each(function() { updateSettingsCheckbox(mahle_globals.myEss_hide, $(this));} );				
		$('input[name="webmail"]').val(mahle_globals.myWebmail);
		$('input[name="hide-webmail"]').each(function() { updateSettingsCheckbox(mahle_globals.myWebmail_hide, $(this));} );
		$('input[name="chat"]').val(mahle_globals.myChat);
		$('input[name="hide-chat"]').each(function() { updateSettingsCheckbox(mahle_globals.myChat_hide, $(this));} );
		$('input[name="phonebook"]').val(mahle_globals.myPhonebook);
		$('input[name="hide-phonebook"]').each(function() { updateSettingsCheckbox(mahle_globals.myPhonebook_hide, $(this));} );
		$('select[name="absences"]').val(mahle_globals.myAbsence);
		$('input[name="hide-absences"]').each(function() { updateSettingsCheckbox(mahle_globals.myAbsence_hide, $(this));} );
		$('input[name="webex"]').val(mahle_globals.myWebex);
		$('input[name="hide-webex"]').each(function() { updateSettingsCheckbox(mahle_globals.myWebex_hide, $(this));} );	

		$('input[name="myapp1"]').val(mahle_globals.myApp1);
		$('input[name="myapp2"]').val(mahle_globals.myApp2);
		$('input[name="myapp3"]').val(mahle_globals.myApp3); 
		$('input[name="myapp1_text"]').val(mahle_globals.myApp1_text);
		$('input[name="myapp2_text"]').val(mahle_globals.myApp2_text);
		$('input[name="myapp3_text"]').val(mahle_globals.myApp3_text);   	

		$('input[name="hide-iap"]').each(function() { updateSettingsCheckbox(/*mahle_globals.myIAP_hide*/ false, $(this));} );//IAP unused, but left for compatibility - MINTRA-622
		$('input[name="hide-sso"]').each(function() { updateSettingsCheckbox(mahle_globals.mySSO_hide, $(this));} );
		
	}	
}

function updatePowerApps() {

	$('.power-apps .icons .absence').attr('href', mahle_globals.myAbsence_ref);
	var powerApps = $(".power-app-a");
	if(powerApps.length) {
		powerApps.each(function() {
			var href = $(this).attr("href");
			if(href.indexOf("%mail%") > 0) {
				$(this).attr("href", href.replace(/%mail%/g, mahle_globals.myEmail));
			}
		});
	} else {
		$('.power-apps .icons .ess').attr('href', "http://appl.intranet.mahle/cn/intranet_fs_forms.nsf/MyESS?OpenForm&mail=%mail%".replace(/%mail%/g, mahle_globals.myEmail));
		$('.power-apps .icons .webmail').attr('href', "http://appl.intranet.mahle/cn/intranet_fs_forms.nsf/MyEmail?OpenForm&mail=%mail%".replace(/%mail%/g, mahle_globals.myEmail));
		$('.power-apps .icons .phone').attr('href', "http://appl.intranet.mahle/cn/intranet_fs_forms.nsf/MyProfile?OpenForm&mail=%mail%".replace(/%mail%/g, mahle_globals.myEmail));
		$('.power-apps .icons .webex').attr('href', "https://mahle.webex.com".replace(/%mail%/g, mahle_globals.myEmail));
	}
	
	$('.power-apps .icons .phone').attr('href',  $('.power-apps .icons .phone').attr('href')+ '&lang='+$('html').attr('lang').toString().toUpperCase());
	
	//hide icons
	if(mahle_globals.myEss_hide == "true") {
		$('.power-apps .icons .ess').closest('li').hide();
	}
	if(mahle_globals.myWebmail_hide == "true") {
		$('.power-apps .icons .webmail').closest('li').hide();
	}
	/*old: if(mahle_globals.myChat_hide == "true") {
		$('.power-apps .icons .chat').closest('li').hide();
	}*/
	if(mahle_globals.myPhonebook_hide == "true") {
		$('.power-apps .icons .phone').closest('li').hide();
	}
	if(mahle_globals.myAbsence_ref == "undefined" || mahle_globals.myAbsence_hide == "true") {
		$('.power-apps .icons .absence').closest('li').hide();
	}
	if(mahle_globals.myWebex_hide == "true") {
		$('.power-apps .icons .webex').closest('li').hide();
	}
	if(mahle_globals.myIAP_hide == "true") { //IAP unused, but left for compatibility - MINTRA-622
		//$('.power-apps .icons .iap').closest('li').hide();
	}
	if(mahle_globals.mySSO_hide == "true") { 
		$('.power-apps .icons .sso').closest('li').hide();
	}
	
	/*hide more tools
	if(mahle_globals.myPhonebook_hide == "true" && mahle_globals.myAbsence_hide == "true" && mahle_globals.myWebex_hide == "true") {
		$('.power-apps .more-tools').hide();
	}*/
}

function setLocationsSelect(changeSelector) {
	$('#settings-form select[name="city"]').removeAttr('disabled');
	var $changeSelector = changeSelector;
	var parentFrame = false;
	if($changeSelector != null) {
		activeCountry = $changeSelector.find('option:selected').attr('data-rel');
	}else {
		//activeCountry = $('#settings-form select[name="country"]').find('option:selected').attr('data-rel');
		activeCountry = mahle_globals.myCountry;
		parentFrame = true;
	}
	
	//hide/show related locations
	var firstActive = false;
	if(parentFrame){
	$('.cboxIframe').contents().find('#settings-form select[name="city"]').find('option').each(function() {
		if($(this).attr('data-rel') == activeCountry) {
			if($(this).parent().hasClass("temp")) {
				$(this).unwrap();
				if(!firstActive) {
					$(this).attr('selected',true);
					firstActive = true;
				}
			}
		}else{
			if(!$(this).parent().hasClass("temp")) {
				$(this).wrap('<span class="temp"></span>').parent().hide();
				$(this).removeAttr('selected');
			}
		}
	});
	}else{
	$('#settings-form select[name="city"]').find('option').each(function() {
		if($(this).attr('data-rel') == activeCountry) {
			if($(this).parent().hasClass("temp")) {
				$(this).unwrap();
				if(!firstActive) {
					$(this).attr('selected',true);
					firstActive = true;
				}
			}
		}else{
			if(!$(this).parent().hasClass("temp")) {
				$(this).wrap('<span class="temp"></span>').parent().hide();
				$(this).removeAttr('selected');
			}
		}
	});
	}
	
}

function checkCountryAndLocationSelect() {
	var status = false;
	if($('#settings-form input[name="email"]').val() != "" && $('#settings-form .country option:selected').attr('class') != "hidden" && $('#settings-form .city option:selected').attr('class') != "hidden"){
		status = true;
		$('#settings-form .errormessage').hide();
	}else{
		$('#settings-form .errormessage').show();
	}
	return status;
}

// Suche starten
function initSearch(urlSuffix) {
	var $result = $('#content .searchresults');
	
	$result.show().addClass('loading').html('<div class="ajax-loader"></div>');
	
	$.ajax({
		url: $result.data('url') + urlSuffix,
		cache: false,
		dataType: 'html',
		success: function(data) {
			if( data != '' ) {
				$result.removeClass('loading').html(data);
			}
			else {
				$result.hide();
			}
		}
	});
}

$(document).ready(function() {

	
	//Browserback detect - reset clickedNavigation storage, if last page has location or sector change
	if(!$('#settings-form').length){
		bajb_backdetect.OnBack = function() {
			var url = location.href;
			if(url.indexOf('?choose') != -1) {
				$.cookie('clickedOtherLocation',null,{path: '/'});
				$.cookie('clickedOtherSector',null,{path: '/'});
			}
		}
	}
	

    $('iframe[src^="http://www.youtube"]').each(function(){
        var url = $(this).attr("src");
        $(this).attr("src",url+"?wmode=transparent");
    });
	
	//Set document.domain, u.a. für location layer auf application sites
	
	document.domain = "intranet.mahle";
	
	
	
	
	
	//Newsdetail - get referrer LC,RC and Breadcrumb
	
	
	$('.accordeon .news a, .newslist .pagination-content li a').click(function() {
		$.cookie('newsreferrer',location.href,{path: '/'});
	});
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
	
	if($('.news-naviation').length){
		referrer = $.cookie('newsreferrer');
		var params = {};
		if(referrer && referrer.indexOf('?') != -1) {
			referrer = referrer.split("?");
			referrer = referrer[0];
		}
		try {
			var year = getUrlParameter("year");
			var month = getUrlParameter("month");
			
			if(month && year) {
				params["month"] = month;
				params["year"] = year;
			}
		} catch(e) {}
		$.ajax({
			type: "GET",
			url: referrer,
			dataType: 'html',
			data: params,
			success: function(data) {
				var dataActivePosition = undefined;
				$dataActive = $(data).find('#navigation-bar').find('.active');
				if($dataActive.hasClass('home')) {
					dataActivePosition = "home";
				}
				if($dataActive.hasClass('location')) {
					dataActivePosition = "location";
				}
				if($dataActive.hasClass('field')) {
					dataActivePosition = "field";
				}
				if($dataActive.hasClass('group')) {
					dataActivePosition = "group";
				}
				dataLC = $(data).find('#left-col').html();
				dataRC = $(data).find('#right-col').html();
				dataBreadcrumb = $(data).find('#breadcrumb').html();
				if(dataBreadcrumb != undefined) {
					$('#breadcrumb').html(dataBreadcrumb);
				}
				if(dataActivePosition && $dataActive.length) {
					$('#navigation-bar .'+dataActivePosition+'').addClass('active');
				}
				$('#left-col').html(dataLC);
				$('#right-col').html(dataRC);
				
				contactAuto();
				appsInfos();
				employeesSearch();
				initCalendarWidget();
				$(".cms-info").hide();
			}
		});
	}
	

	
	
	$(document).bind('cbox_complete', function() {			
		if (!$('#cboxTitle').attr('data-height')) {
			$('#cboxTitle').attr('data-height', $('#cboxTitle').css('height'));
			$('#cboxContent').attr('data-padding-top', $('#cboxContent').css('padding-top'));
		}	
		var titleLineHeight = 20;
		if ($('#cboxTitle span').css('line-height')) {
			titleLineHeight = parseInt($('#cboxTitle span').css('line-height').replace('px',''));
		}
		var titleContainerHeight = parseInt($('#cboxTitle').attr('data-height').replace('px',''));
		if ($('#cboxTitle span').height() > titleLineHeight) {
			$('#cboxTitle').css('height', (titleContainerHeight + ($('#cboxTitle span').height() - titleLineHeight)) + 'px');
			$('#cboxContent').css('padding-top', (30 + titleContainerHeight + ($('#cboxTitle span').height() - titleLineHeight)) + 'px');			
			$.colorbox.resize({innerHeight: $('#cboxContent').height() + ($('#cboxTitle span').height() - titleLineHeight), innerWidth: $('#cboxContent').width()});
		}
		
		$('#cboxClose').html("");
	});
	$(document).bind('cbox_closed', function() {	
		$('#cboxTitle').css('height', $('#cboxTitle').attr('data-height'));
		$('#cboxContent').css('padding-top', $('#cboxContent').attr('data-padding-top'));		
	});
	


	/* Get parent document for triggering cbox_cleanup(before close) event (otherwise cookie-data can't be set, close-button isn't within iframe)*/
	if($('#settings-form').length){
	
		//Set document.domain, u.a. für location layer auf application sites
		
		//document.domain = "intranet.mahle";
		
		
		var parent$ = window.parent.$;
	
		//MySettings Close
		if(parent$ != null) {
			parent$(document).bind('cbox_cleanup', function() {	
					setSettingsCookies();
					
					//reset clickedNavigation storage
					$.cookie('clickedOtherLocation',null,{path: '/'});
					$.cookie('clickedOtherSector',null,{path: '/'});
					
										
					if(mahle_globals.setDefault){
						
							$getHome = parent$('#navigation-bar .home');
							window.parent.location.href = $getHome.attr('href');
						
					} 
			});
		}
	}
	
	/* Check if personalization data is set - if not, open layer */
	if($.cookie('mahle_settings') == null && !$('#settings-form').length) {
		$.colorbox({href: $('#settings a').attr('href'), fastIframe: false, iframe: true, overlayClose: false, innerHeight: $('#settings a').attr('data-height'), innerWidth: $('#settings a').attr('data-width'), scrolling: false, title: '<span>' + $('#settings a').text() + '</span>', opacity: 0.6, transition: 'none',
			onComplete:function() {
				$('#cboxClose').off();  //unbind()				
				$('#cboxClose').hide();	

				//Disable Locationsselect, if there is no cookie-data
				var checkSettings = $.cookie('mahle_settings');			
				if(checkSettings == null) {
					$('.cboxIframe').contents().find('#settings-form select[name="city"]').attr('disabled','disabled');
				}else{
					setLocationsSelect();
				}
			}
		});				
	}
	
	
	/* Start update HEADER */
	/* Get cookies and set data in my-settings page */
	getSettingsCookies();
	
	
	/* Update personalized power-apps */
	updatePowerApps();
	
	//insert personal apps
    if(mahle_globals.myApp1 != undefined || mahle_globals.myApp2 != undefined || mahle_globals.myApp3 != undefined) {
     
        if(mahle_globals.myApp3.length){
            myApp3Ico = $('.tools .power-apps .icons').attr('data-myapp3-ico');
            myApp3Li = "<li class=\"myapp\"><a href=\""+mahle_globals.myApp3+"\" target=\"_blank\" style=\"background-image:url("+myApp3Ico+")\">"+mahle_globals.myApp3+"<div class=\"tooltip\"><p>"+mahle_globals.myApp3_text+"</p></div></a></li>";
            $('.tools .power-apps .icons').prepend(myApp3Li);
        }
        if(mahle_globals.myApp2.length){
            myApp2Ico = $('.tools .power-apps .icons').attr('data-myapp2-ico');
            myApp2Li = "<li class=\"myapp\"><a href=\""+mahle_globals.myApp2+"\" target=\"_blank\" style=\"background-image:url("+myApp2Ico+")\">"+mahle_globals.myApp2+"<div class=\"tooltip\"><p>"+mahle_globals.myApp2_text+"</p></div></a></li>";
            $('.tools .power-apps .icons').prepend(myApp2Li);
        }
        if(mahle_globals.myApp1.length){
            myApp1Ico = $('.tools .power-apps .icons').attr('data-myapp1-ico');
            myApp1Li = "<li class=\"myapp\"><a href=\""+mahle_globals.myApp1+"\" target=\"_blank\" style=\"background-image:url("+myApp1Ico+")\">"+mahle_globals.myApp1+"<div class=\"tooltip\"><p>"+mahle_globals.myApp1_text+"</p></div></a></li>";
            $('.tools .power-apps .icons').prepend(myApp1Li);
        }
         
    }
	
	$('#header .power-apps .icons a.phone').click(function(event) {
		event.preventDefault();
		$.colorbox({href: $(this).attr('href'), fastIframe: false, iframe: true, overlayClose: true, innerHeight: 600, innerWidth: 800, scrolling: true, opacity: 0.6, transition: 'none'});
	});
	
	
	/* Language Selector */	
	$('#lang-select ul li').last().addClass('last');
	
	
	/* Disable personalized information in navbar */
	$('.tab.location .col li a, #footer .footer-country-select-content .col li a, .sitemap-content-locations li a').click(function() {
			clickedOtherLocation = true;
			clickedOtherLocationValue = $(this).attr('data-rel');
			clickedOtherLocationRef = $(this).attr('href');			
			clickedOtherLocationCountry = $(this).attr('data-country');
			clickedOtherLocationData = clickedOtherLocation + "|" + clickedOtherLocationValue + "|" + clickedOtherLocationRef + "|" + clickedOtherLocationCountry;
			
			$.cookie('clickedOtherLocation',clickedOtherLocationData,{path: '/'});
	});
	
		
	$('.tab.field .col li a, .sitemap-content-sectors li a').click(function() {
			clickedOtherSector = true;
			clickedOtherSectorValue = $(this).attr('data-rel');
			clickedOtherSectorRef = $(this).attr('href');
			clickedOtherSectorData = clickedOtherSector + "|" + clickedOtherSectorValue + "|" + clickedOtherSectorRef;
			$.cookie('clickedOtherSector',clickedOtherSectorData,{path: '/'});
	});
	
	//reset clickedNavigation storage
	$('#navigation-bar .home').click(function() {
		$.cookie('clickedOtherLocation',null,{path: '/'});
		$.cookie('clickedOtherSector',null,{path: '/'});
	});

	if(mahle_globals.myCountry) {
			
		//Set session-location (if other location has been clicked)
		var getClickedOtherLocation = $.cookie('clickedOtherLocation');		
		var getCOLValues = "";
		var otherCountrySet = false;
		if(getClickedOtherLocation != null ) {
			getCOLValues = getClickedOtherLocation.split("|");
			if(getCOLValues.length == 4) { //other Country has been clicked			
				otherCountrySet = true;
				
			}
		} 
		
	
		//Set data for content-sitemap (if available) and navigation bar
		myLocation = mahle_globals.myLocation;
		myCountry = mahle_globals.myCountry? mahle_globals.myCountry.toLowerCase() : "";
		if(myCountry.indexOf(' ') != -1){
			myCountry = myCountry.replace(/ /g,"_");
		}
		if(myCountry.indexOf('-') != -1){
			myCountry = myCountry.replace(/\-/g,"_");
		}
		mySector = mahle_globals.mySector? mahle_globals.mySector.toLowerCase() : "";
		if(mySector.indexOf(' ') != -1){
			mySector = mySector.replace(/ /g,"_");
		}
		if(mySector.indexOf('-') != -1){
			mySector = mySector.replace(/\-/g,"_");
		}
		
		//Overwrite myCountry,if other location has been set
		if(otherCountrySet){			
			myCountry = getCOLValues[3];  			
		}
		
		setTimeout(function() {
			if($('.sitemap.accordeon').length)
			{
				//Sitemap Home, 1st col
				$itemContentCountryLocation = $('.item-content-country.'+myCountry).find('ul li[data-rel="'+mahle_globals.myLocation.replace(".","_").toLowerCase()+'"]');
				$itemContentCountryLocation.addClass('isHome');
				$('.col2.locHome').html("<li>" + $itemContentCountryLocation.html() + "</li>");

				//home - active sector and lower
				$('.active-sector.'+mySector).show();
				
				//sectors
				$('.item-content-country.'+myCountry).show();
			}
		}, 1);
		
		//Set footer-sitemap
		$('.sitemap.default').hide();
		if(myCountry) { 
			$('.sitemap.'+myCountry).show();
	
			//Set country for location-elements
			try { 
				$('.layer-country.'+myCountry).show();
			}catch(err) {
				//please choose or other...
			};
		}
						
		//Set Location - src: mySettings
		if(!$('.tab.location').hasClass('active')){	//nur wenn nicht auf der Seite selbst, auch für Browserback
			if(getCOLValues[0] != "true") {	
				myLocation = mahle_globals.myLocation;
				myLocationToLower = myLocation? myLocation.toLowerCase().replace(" ","_").replace("-","_").replace("&","_").replace(".","_") : "";
				for(var i=0; i<defaultDiacriticsRemovalMap.length; i++) {		
					myLocationToLower = myLocationToLower.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);  //remove accents
				}
				if(myCountry) { 
					$('.layer-country.'+myCountry+' .col li a').each(function() {
						if($(this).attr('data-rel') == myLocationToLower) {
							locUrl = $(this).attr('href');
							locLabel = $(this).html();
						
							if(locUrl){
								$('.tab.location .link').html(locLabel);
								$('.tab.location .link').attr('href',locUrl);
								$('.tab.location .link').attr('data-rel',myLocationToLower);
							}
						}
					});
				}
			}else {	//Set Location - src: clickedOtherSector
				$('.layer-country.'+myCountry+' .col li a').each(function() {
					if($(this).attr('data-rel') == getCOLValues[1]) {
						locUrl = $(this).attr('href');
						locLabel = $(this).html();
					
						if(locUrl){
							$('.tab.location .link').html(locLabel);
							$('.tab.location .link').attr('href',locUrl);
							$('.tab.location .link').attr('data-rel',$(this).attr('data-rel'));
						}
					}
				});
			}
		}
		else {
			$('.layer-country.' + myCountry + ' .col li a').each(function() {
				if ($('.tab.location .link').text() === $(this).text()) {
					$('.tab.location .link').attr('data-rel', $(this).text().toLowerCase().replace(" ","_").replace("-","_").replace("&","_"));
				}
			});
		}
		
		
		//Set Sector
		var getClickedOtherSector = $.cookie('clickedOtherSector');
		var getCOSValues = "";
		if(getClickedOtherSector != null) {
			getCOSValues = getClickedOtherSector.split("|");
		}	
			
		//Set Sector - src: mySettings
		if(!$('.tab.field').hasClass('active')){   //nur wenn nicht auf der Seite selbst, auch für Browserback		
			if(getCOSValues[0] != "true") {	
				
				mySector = mahle_globals.mySector;
				$('.tab.field .col li a').each(function() {
					if($(this).attr('data-rel') == mySector) {
						secUrl = $(this).attr('href');
						secLabel = $(this).html();
						
						if(secUrl){
							$('.tab.field .link').html(secLabel);
							$('.tab.field .link').attr('href',secUrl);
							$('.tab.field .link').attr('data-rel',mySector.toLowerCase().replace(" ","_").replace("-","_").replace("&","_"));
						}
					}
				});
			}else {	//Set Sector - src: clickedOtherSector
				$('.tab.field .col li a').each(function() {
					if($(this).attr('data-rel') == getCOSValues[1]) {
						secUrl = $(this).attr('href');
						secLabel = $(this).html();
						
						if(secUrl){
							$('.tab.field .link').html(secLabel);
							$('.tab.field .link').attr('href',secUrl);
							$('.tab.field .link').attr('data-rel',$(this).attr('data-rel'));
						}
					}
				});
			}
		}
	}	
	/* End update navbar */

	// Contact auto
	
	function contactAuto() {
		$('.contact-img.auto img').each(function() {
			var $this = $(this),
				url = $(this).attr('src'),	//Mahle WS, Cross-domain
				userMail = url.split("&RestrictToCategory="),	//SFE WS
				WSUrl = "/getImage?email="+userMail[1];
				
			$(this).attr('src','/media/system_files/img/design/anon.jpg');
			
			$.ajax({
				type: 'GET',
				url: WSUrl,
				dataType: 'text',
				success: function(data) {
					if(data != "") {
						$this.attr('src',data);
					}
				}
			});
		});
	}
	contactAuto();
	
	
	
	/* Setting Form */
	$('#settings a').click(function(event) {
		event.preventDefault();
		$.colorbox({href: $(this).attr('href'), fastIframe:false, iframe: true, overlayClose: false, innerHeight: $(this).attr('data-height'), innerWidth: $(this).attr('data-width'), scrolling: false, title: '<span>' + $(this).text() + '</span>', opacity: 0.6, transition: 'none',
			onComplete:function() {
				$('#cboxClose').off();  //unbind()
				$('#cboxClose').hide();
				$('#cboxClose').click(function(event) {
					event.preventDefault();											
				});	
				
				//Disable Locationsselect, if there is no cookie-data
				var checkSettings = $.cookie('mahle_settings');
				if(checkSettings == null) {
					$('#settings-form select[name="city"]').attr('disabled','disabled');
				}else{
					setLocationsSelect();
				}
			}
		});

	});	
	$('#settings-form .checkbox').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('input').attr('checked', false);
		}
		else {
			$(this).addClass('active');
			$(this).find('input').attr('checked', true);
		}	
	});
	$('#settings-form .hide label').click(function(event) {
		event.preventDefault();
		return false;
	});
	$('#settings-form .checkbox input').each(function() {
		if ($(this).is (':checked')) {
			$(this).parent().addClass('active');
		}	
	});
	$('#settings-form .button.cancel').click(function(event) {		
		event.preventDefault();	
		var sett = $.cookie('mahle_settings')
		if(sett != null){		
			mahle_globals.cancel = true;
			parent.mahle_globals.cancel = true;
			mahle_globals.setDefault = false;
			parent.mahle_globals.setDefault = false;
			parent.$.fn.colorbox.close();
			self.parent.location.reload();
		}else{ /* Setze Default in close/cleanup: kein Cookie vorhanden */			
			mahle_globals.cancel = true;
			parent.mahle_globals.cancel = true;
			mahle_globals.setDefault = true;
			parent.mahle_globals.setDefault = true;
			parent.$.fn.colorbox.close();
		} 
	});
	$('#settings-form .button.submit').click(function(event) {
		//event.preventDefault();
		var checkCAL = checkCountryAndLocationSelect();
		if(checkCAL){
			mahle_globals.cancel = false;
			parent.mahle_globals.cancel = false;
			parent.$.fn.colorbox.close();
			self.parent.location.reload();
		}else {
			event.preventDefault();
		}	
	});
	$('#settings-form .button.light').click(function(event) {
		//event.preventDefault();
		var checkCAL = checkCountryAndLocationSelect();
		if(checkCAL){
			mahle_globals.cancel = false;
			parent.mahle_globals.cancel = false;			
			parent.$.fn.colorbox.close();
		}else {
			event.preventDefault();
		}
	});
	
	//Set iframe-height
	if ($('#settings-form').length > 0) {
		$(function(){
			parent.$.colorbox.resize({
				innerWidth:$('body').width() + 36,
				innerHeight:$('body').height() + 18
			});
		});	
	}
	
	
	// Show locations related to choosen country
	$('#settings-form select[name="country"]').change(function() {
		setLocationsSelect($(this));
		checkCountryAndLocationSelect();
	});
	
	// changed location by user and set ref to locationhome
	$('#settings-form select[name="city"]').change(function() {
		checkCountryAndLocationSelect();
	});
	
	// changed sector by user and set ref to locationhome
	$('#settings-form select[name="department"]').change(function() {
		checkCountryAndLocationSelect();
	});
	
	//Set home into cookie
	$.cookie('settings_location_home', $('#settings-form #footer .button.light').attr('href'), {path: '/', expires:365});
		
	
	
	/* Fix Footer height */
	var footerHeight = 0;
	$('#footer .sitemap-content .col').each(function() {
		if ($(this).height() > footerHeight) {
			footerHeight = $(this).height();
		}
	});
	$('#footer .sitemap-content .col').css('height', footerHeight + 'px');
	footerHeight = 0;
	$('#footer .footer-country-select-content .col').each(function() {
		if ($(this).height() > footerHeight) {
			footerHeight = $(this).height();
		}
	});
	$('#footer .footer-country-select-content').addClass('loaded');
	$('#footer .footer-country-select-content .col').css('height', footerHeight + 'px');
	
	/* input placeholder */
	$('*[placeholder]').placeholder();


/* Suche */
	if( $('#content .searchresults').length ) {
		var $result = $('#content .searchresults'),
			query = getUrlVars()['q'];
		
		if( query && query!='' ) {
			initSearch('?q=' + query);
			//Extend Language-Selector
			$('#lang-select li a').each(function() {
				var href = $(this).attr('href');
				$(this).attr('href', href + "?q=" + query );
			});
		}
		else {
			$result.hide();
		}
		// Submit
		$result.on('click', '.actions .submit', function(event, urlparams) {
			location.href = '?q=' + encodeURIComponent( $(this).siblings('input').val() );
		});
		$result.on('keyup', '.actions input', function(event) {
			if(event.keyCode == 13) {
				$result.find('.actions .submit').trigger('click');
			}
		});
		// Paging
		$result.on('click', '.paging .pager a[href], .items-page a', function(event) {
			event.preventDefault();
			var href = $(this).attr('href');
			
			initSearch( href + '&q=' + getUrlVars()['q'] );
		});
	}	
	
	/* World Time Clock */
	var	lang = $('html').attr('lang'),
		clocksSrc = "http://appl.intranet.mahle/cn/intranet_fs_forms.nsf/V$WTAllWebViewJSON/1?OpenDocument?lang=" + lang,
		updateWtcIntervall = null;
	$.ajax({
        type: "GET",
		url: clocksSrc,
		dataType: 'jsonp',
		success: function(data) {
			var newHtml = "", 
				newHtmlTop = "";				
				$.each(data.cities, function(i,item){                                                                           
					newHtml += '<div class="clock"><span class="time" data-wt="' + item.zone + '">&nbsp;</span><span class="place">' + item.city + '</span></div>';				
				}); 
				newHtmlTop = '<span class="time">&nbsp;</span>'; 
				$('#clocklayer .power-apps').html(newHtml); 
				$('.clock[data-id="clocklayer"]').html(newHtmlTop); 
				updateWtc(); 
				updateWtcIntervall = window.setInterval("updateWtc()", 5000);                                   		  
		},
		error: function(e, e2, e3) {
			//alert(e.status);
			//alert(e3);
		}		
	});

	/* Start iFrame App wide */
	$('.btn-start-app.start-self-wide, .iframe-app .app-menu .start-self-wide').click(function() {	
		var $appContainer = $(this).parents('.iframe-app'),		
			$appMenu = $appContainer.find('.iframe-app-header .app-menu'),
			$btnBack = $appContainer.find('.iframe-app-header .btn-back');				
		$btnBack.addClass('start-self-wide').show();		
		$appMenu.find('li.active').removeClass('active');
		$appMenu.find('li:last').addClass('active');	
		$('#left-col').hide();		
		$('body').removeClass('wide').addClass('full');		
		$appContainer.find('iframe').attr('src', $(this).attr('href')).attr('width','978');
	});
	$('.iframe-app-header .btn-back.start-self-wide').on('click',function(event) {
		event.preventDefault();
		var $appContainer = $(this).parents('.iframe-app'),		
			$appMenu = $appContainer.find('.iframe-app-header .app-menu');				
		$appMenu.find('li.active').removeClass('active');
		$appMenu.find('li a[href="#description"]').parent().addClass('active');				
		$appContainer.find('iframe').css('position','absolute').css('top','-10000px');
		$appContainer.find('.iframe').css('height','auto');
		$appContainer.find('.description').show();		
		$('#left-col').show();		
		$('body').removeClass('full').addClass('wide');
		$(this).hide();
		$appContainer.find('iframe').attr('width','726');
		return false;
	});


/* Newslist */
	$('.newslist .newslist-display a').click(function(event) {
		event.preventDefault();
		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		if ($(this).hasClass('no-images')) {
			$(this).parents('.newslist').find('.pagination-content').addClass('no-img');
			if ($(this).parents('.pagination-header').find('form').length > 0) {	
				$(this).parents('.pagination-header').find('form').each(function() {
					$(this).find('input[name="show-img"]').val('false');
				});				
				$(this).parents('.newslist').find('.pagination-menu-container a, .items-page a').each(function() {
					var href = $(this).attr('href');
					if (href.indexOf('?') >= 0) {
						$(this).attr('href', href.substr(0, href.indexOf('?')));
						href = $(this).attr('href');
					}
					$(this).attr('href', href + '?show-img=false');				
				});				
			}	
		}
		else {
			$(this).parents('.newslist').find('.pagination-content').removeClass('no-img');
			if ($(this).parents('.pagination-header').find('form').length > 0) {			
				$(this).parents('.pagination-header').find('form').each(function() {
					$(this).find('input[name="show-img"]').val('true');
				});
				$(this).parents('.newslist').find('.pagination-menu-container a, .items-page a').each(function() {
					var href = $(this).attr('href');
					if (href.indexOf('?') >= 0) {
						$(this).attr('href', href.substr(0, href.indexOf('?')));
						href = $(this).attr('href');
					}
					$(this).attr('href', href + '?show-img=true');				
				});
			}
		}	
		return false;
	});


	/* Image-Lightbox */
	$('.paragraph .image a, .text-cols .image a').click(function(event) {
		event.preventDefault();		
		var title = "";
		if ($(this).parent().find('>p').length > 0 &&  $(this).parent().find('>p').text() != "") {
			title = $(this).parent().find('>p').text();
		}
		else {
			title = $(this).attr('alt');
		}
		
		$.colorbox({href: $(this).attr('href'), title: '<span>' + $(this).parent().find('>p').text() + '</span>', opacity: 0.6, transition: 'none'});
		return false;	
	});
	
	
	

	
/* Sortable list */
	$('.sortable-list .menu').each(function() {
		var itemsWidth = 0;
		$(this).find('>li').each(function() {
			itemsWidth = itemsWidth +$(this).width() + 32;
		});
		var space = $(this).width() - itemsWidth + 1;
		var mod = space % $(this).find('>li').length;
		space = (space - mod) / $(this).find('>li').length;
		$(this).find('>li').each(function() {
			$(this).css('width', ($(this).width() + space) + 'px');
		});
		$(this).find('>li:last-child').each(function() {
			$(this).css('width', ($(this).width() + mod) + 'px');
		});
	});
	
	
	
	/* Tooltips */
	$('.tooltip').parent().hoverIntent(function() {
		$(this).find('.tooltip').fadeTo(300,1);	
	},
	function() {
		$(this).find('.tooltip').hide();
	});
		



	/* iFrame Apps */
	$('.iframe-app').each(function() {
		if ($(this).find('.iframe-app-header .app-menu li.active').length > 0 && $(this).find('.iframe-app-header .app-menu li.active a[href="#description"]').length == 0) {		
			$(this).find('iframe').attr('src', $(this).find('.iframe-app-header .app-menu li.active a').attr('href'));
			$(this).find('.iframe').css('height', $(this).find('iframe').attr('height') + 'px');
		}	
		else if ($(this).find('.iframe-app-header .app-menu li.active a[href="#description"]').length > 0) {
			$(this).find('iframe').css('position','absolute').css('top','-10000px');
			$(this).find('.description').show();
			$(this).find('.iframe').css('height', 'auto');
		}
		else {
			$(this).find('.iframe').css('height', $(this).find('iframe').attr('height') + 'px');
		}		
	});
	$('.wide .iframe-app, .full .iframe-app').each(function() {
		if ($(this).find('.iframe-app-header .headline').length > 0) {
			var width = $(this).width();
			if ($(this).find('.iframe-app-header .btn-back').length > 0) {
				width = width - $(this).find('.iframe-app-header .btn-back').width() - parseInt($(this).find('.iframe-app-header .btn-back').css('margin-right').replace('px',''));
			}		
			if ($(this).find('.iframe-app-header .app-menu').length > 0) {			
				width = width - $(this).find('.iframe-app-header .app-menu').width() - 25;
			}	
			$(this).find('.iframe-app-header .headline').css('width', width + 'px');
		}
	});
	$('.iframe-app .app-menu a').click(function(event) {
		if($(this).attr('target') != "_blank"){
			if (! $(this).parents('li').hasClass('login')) {
				$(this).parents('.app-menu').find('li.active').removeClass('active');
				$(this).parents('li').addClass('active');
				if ($(this).attr('href') == '#description') {
					event.preventDefault();
					$(this).parents('.iframe-app').find('iframe').css('position','absolute').css('top','-10000px');
					$(this).parents('.iframe-app').find('.description').show();
					$(this).parents('.iframe-app').find('.iframe').css('height', 'auto');
					return false;
				}
				else {
					$(this).parents('.iframe-app').find('iframe').load(function() {
						$(this).parents('.iframe-app').find('iframe').css('position','static').css('top','0');
						$(this).parents('.iframe-app').find('.description').hide();
						$(this).parents('.iframe-app').find('.iframe').css('height', $(this).parents('.iframe-app').find('iframe').height() + 'px');
					});				
				}		
			}
		}
	});		
	if($('body').hasClass('no-header')) {
		$('.iframe-app .arrow-up').hide();
		$('.iframe-app .arrow-down').show();
	}
	else {
		$('.iframe-app .arrow-down').hide();
		$('.iframe-app .arrow-up').show();
	}	
	$('.iframe-app .arrow-up').click(function(event) {
		event.preventDefault();
		if(!$('body').hasClass('no-header')) {
			$('#header').hide();
			$('body').addClass('no-header');		
		}	
		$(window).scrollTop($(this).parents('.iframe-app').offset().top - 10);
		$('.iframe-app .arrow-up').hide();
		$('.iframe-app .arrow-down').show();
		return false;
	});
	$('.iframe-app .arrow-down').click(function(event) {
		event.preventDefault();
		if($('body').hasClass('no-header')) {
			$('#header').show();
			$('body').removeClass('no-header');			
		}	
		$(window).scrollTop(0);
		$('.iframe-app .arrow-down').hide();
		$('.iframe-app .arrow-up').show();
		return false;
	});
	
	$('.description .btn-start-app').click(function(event) {
		if($(this).attr('target') == "_blank"){
		//continue
		}else{
			event.preventDefault();
			$('#app-tab a').trigger('click');
			$(this).parents('.iframe-app').find('iframe').css('position','static').css('top','0');
			$(this).parents('.iframe-app').find('.description').hide();
			$(this).parents('.iframe-app').find('.iframe').css('height', $(this).parents('.iframe-app').find('iframe').height() + 'px');
		}
	});
	
	
	/* Zurück Button */
	$('a.btn-back').click(function(event) {
		if (!$(this).hasClass('start-self-wide')) {
			event.preventDefault();
			window.history.back();
			return false;	
		}
	});
	
	/* Seite drucken */
	$('.content-footer a.print').click(function(event) {
		event.preventDefault();
		window.print();
		return false;	
	});
	
	/* Seite empfehlen */
	$('.content-footer a.recommend').each(function() {
		$(this).attr('href','mailto:?body='+window.location+'&subject='+document.title);
	});
	
	$('.content-footer a.top').click(function(event) {
		event.preventDefault();
		$(window).scrollTop(0);
		return false;	
	});




	

		
/* Downloadliste - Zeilenanpassung */
$('#content .downloads-cols2').downloadListCol2();
	
	
/* video player */

var videoPlayerCount = 1;
setTimeout(function(){  // Timeout important for CMS!

	$('#content .video').each(function(index) {
	
		
		if($(this).hasClass('swf')) {
			// do nothing;			
		}else{
			if ($(this).parent().attr('data-fs-attrs')) {
				var akkordeon_parent = $(this).parent().parent().parent().hasClass('akkordeon_element');
			}else{
				var akkordeon_parent = $(this).parent().parent().hasClass('akkordeon_element');
			}
			if(akkordeon_parent){
				if (typeof total === 'undefined') {var total = $('.akkordeon_element .video').length - 1;}
				/*
				if(index == 0) {
				*/
						if($(this).attr('data-preview')) {
							var playerImg = $(this).attr('data-preview');
						}else if($(this).find('.player img')) {
							var playerImg = $(this).find('.player img').attr('src');
						}
						var playerVideo = $(this).find('.player a').attr('href');
						var playerId = 'video-player-' + videoPlayerCount;
						$(this).find('.player').attr('id',playerId);
						videoPlayerCount++;
						var playerWidth = $(this).find('.player').width();	
						var playerHeight = (playerWidth / 16) * 9;		

						jwplayer(playerId).setup({
							'flashplayer': '/media/system_files/flash/player.swf',
							'html5player': '/media/system_files/js/jwplayerhtml5.js',
							'autostart': false,
							'image': playerImg,
							'height': playerHeight,
							'width': playerWidth,
							'file': playerVideo,
							'stretching': 'fill',
							//'stretching': 'uniform',
							analytics: {
								cookies: false,
								enabled: false
							}
						});
				/*	
				}else{

					$(this).parent().parent().parent().on( 'click', function () {
						if($(this).attr('data-preview')) {
							var playerImg = $(this).attr('data-preview');
						}else if($(this).find('.player img')) {
							var playerImg = $(this).find('.player img').attr('src');
						}
						var playerVideo = $(this).find('.player a').attr('href');
						var playerId = 'video-player-' + videoPlayerCount;
						$(this).find('.player').attr('id',playerId);
						videoPlayerCount++;
						var playerWidth = $(this).find('.player').width();	
						var playerHeight = (playerWidth / 16) * 9;			

						jwplayer(playerId).setup({
							'flashplayer': '/media/system_files/flash/player.swf',
							'html5player': '/media/system_files/js/jwplayerhtml5.js',
							'autostart': false,
							'image': playerImg,
							'height': playerHeight,
							'width': playerWidth,
							'file': playerVideo,
							'stretching': 'fill',
							//'stretching': 'uniform',
							analytics: {
								cookies: false,
								enabled: false
							}
						});
					});

				}	
				*/	
		
			}else{

				if($(this).attr('data-preview')) {
					var playerImg = $(this).attr('data-preview');
				}else if($(this).find('.player img')) {
					var playerImg = $(this).find('.player img').attr('src');
				}
				var playerVideo = $(this).find('.player a').attr('href');
				var playerId = 'video-player-' + videoPlayerCount;
				$(this).find('.player').attr('id',playerId);
				videoPlayerCount++;
				var playerWidth = $(this).find('.player').width();	
				var playerHeight = (playerWidth / 16) * 9;		

				jwplayer(playerId).setup({
					'flashplayer': '/media/system_files/flash/player.swf',

					'html5player': '/media/system_files/js/jwplayerhtml5.js',
					'autostart': false,
					'image': playerImg,
					'height': playerHeight,
					'width': playerWidth,
					'file': playerVideo,
					'stretching': 'fill',
					//'stretching': 'uniform',
					analytics: {
						cookies: false,
						enabled: false
					}
				});
			}
		}
		
	});

	$('.akkordeon').addClass('loaded');	

},10);
	
	/* stage */
	var stageCycle = null;	
	if (parseInt($('#stage').attr('data-cycle')) > 0 && $('#stage .stage-slides > li').length > 1) {
		stageCycle = window.setInterval("cycleStage()", parseInt($('#stage').attr('data-cycle')) * 1000);
	}
	$('#stage .stage-menu li > a').click(function(event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('active')) {
			if (stageCycle != null) {
				window.clearInterval(stageCycle);
				stageCycle = window.setInterval("cycleStage()", parseInt($('#stage').attr('data-cycle')) * 1000);
			}		
			$('#stage .stage-slides > li').stop(true, true);			
			$('#stage .stage-menu li').removeClass('active');
			$(this).parent().addClass('active');	
			$('#stage .stage-slides > li.active').fadeTo(1000,0,function() {
				$(this).removeClass('active');
			});						
			$($(this).attr('href')).fadeTo(1000,1,function() {
				$(this).addClass('active');				
			});
		}		
		return false;
	});	
	
	var contentStageCycle = null;	
	if (parseInt($('#content-keyvisual-slider').attr('data-cycle')) > 0 && $('#content-keyvisual-slider .stage-slides > li').length > 1) {
		/*cycleContentStage();*/
		contentStageCycle = window.setInterval("cycleContentStage()", parseInt($('#content-keyvisual-slider').attr('data-cycle')) * 1000);
	}
	$('#content-keyvisual-slider .stage-menu li > a').click(function(event) {
		event.preventDefault();
		if (!$(this).parent().hasClass('active')) {
			if (contentStageCycle != null) {
				window.clearInterval(contentStageCycle);
				contentStageCycle = window.setInterval("cycleContentStage()", parseInt($('#content-keyvisual-slider').attr('data-cycle')) * 1000);
			}		
			$('#content-keyvisual-slider .stage-slides > li').stop(true, true);			
			$('#content-keyvisual-slider .stage-menu li').removeClass('active');
			$(this).parent().addClass('active');	
			$('#content-keyvisual-slider .stage-slides > li.active').fadeTo(1000,0,function() {
				$(this).removeClass('active');
			});						
			$($(this).attr('href')).fadeTo(1000,1,function() {
				$(this).addClass('active');				
			});
		}		
		return false;
	});
	

	/* Language Selector */
	$('#lang-select').initDropdown('ul');
	
	
	/* Login-Box */
	
	//preselect email
	$('#login .layer input[name="login"]').val(mahle_globals.myEmail);
	
	//open layer, if parameter 'login' exists
	var openLogin = getUrlVars()['login'];
	if(openLogin == "true") {
		$('#login').addClass('open');
		$('#login .layer input[name="login"]').focus();
	}
	
	$('#login').each(function() {
		var $this = $(this),
			$layer = $this.find('.layer'),
			$button = $this.find('.logged');
		if (! $button.hasClass('in')) {	
			$button.bind('click', function(e) {
				e.preventDefault();
				if($this.hasClass('open')) {
					$this.removeClass('open', 1000);
				}
				else {
					$this.addClass('open', 1000);
				}
			});
		}else {
			$button.bind('click', function(e) {
				e.preventDefault();
				$submitButton = $layer.find('button.submit');
				$submitButton.click();
			});
		}
		
		$this.find('[type="submit"]').bind('click', function(e) {
			e.preventDefault();
			var $form = $(this).parents('form');
			
			$form.after('<div class="ajax-loader"></div>');
			$form.hide();
			
			$.ajax({
				data: $form.serialize(),
				dataType: 'text',
				type: 'POST',
				url: '/authServlet',
				success: function( data, textStatus, jqXHR ) {
					$form.submit();
				}
			});
		})
	});
	
	$('#login a.link').click(function(event){
		event.preventDefault();
		href = $(this).attr('href');
		title = '<span>'+$(this).text()+'</span>';
		$.colorbox({href: href, fastIframe: false, iframe: true, overlayClose: true, title: title, innerHeight: 250, innerWidth: 450, scrolling: true, opacity: 0.6, transition: 'none'});
	});
	
	/* Header-Layer */
	$('#header .tools .more-tools, #header .tools .clock').bind('click', function(e) {
		var $this = $(this),
			$layer = $('#' + $this.data('id')),
			$body = $('body');
		
		if( $body.hasClass('open-layer') && $layer.is(":visible") ) {
			$body.removeClass('open-layer');
			$layer.hide();
			$this.removeClass('active');
				/*, function() {			

			});
			*/
		}
		else {
			$('#header .powerlayer').hide();
			$('#header .tools .active').removeClass('active');
			$layer.show();
			$this.addClass('active');
			$body.addClass('open-layer');
		}
	});
	
	//Check powerapp affiliation
	if($('#header .tools .more-tools').length) {
		var hideMoreTools = true;
		$('#header #toollayer .power-apps .icons li').each(function() {
			if($(this).hasClass(mahle_globals.myCountry) || $(this).hasClass(mahle_globals.myLocation) || $(this).hasClass(mahle_globals.mySector) || $(this).hasClass("group")) {
				hideMoreTools = false;
			}else {
				$(this).hide();
			}
		});
		if(hideMoreTools) {
			$('#header .tools .more-tools').hide();
		}
	};
	
	/* Clock */
	$('#clocklayer .clock').click(function() {
		$('#clocklayer .clock.active').removeClass('active');
		$(this).addClass('active');
		
		var time = $(this).find('.time').html();
		var place = $(this).find('.place').html();
		$('.tools .clock.active .time').html(time);
		$('.tools .clock.active .place').html(place);
		
		var clockString = time + "|" + place;
		$.cookie('clock',clockString, {path: '/', expires:365});
	});
	
	/* Layer in Navigation-Bar */
	$('#navigation-bar .tab .layer').each(function() {
		var $this = $(this),
		browser = navigator.userAgent.toLowerCase();
		

		$(this).find('>a').append('<div></div>')
		
		if(browser.indexOf('msie') > -1) {
			$this.find('.layer-content').css('left', -1 * $this.parents('.tab').position().left - 211);
		}
		else {	
			$this.find('.layer-content').css('left', -1 * $this.parents('.tab').position().left - 211);
		}
		$this.hoverIntent(function() {
			$this.addClass('active');
		}, function() {
			$this.removeClass('active');
		});
	});
	
	//Update default-images in navigation-bar
	//tab active
	(function setDefaultValue(){	
		var $layer = $('#navigation-bar .location .layer-content');
		var $img = $layer.find('img.preview')
		var $active = $layer.find('a.active');
		$img.attr('src',$active.data('image'));
		
		var $layerS = $('#navigation-bar .field .layer-content');
		var $imgS = $layerS.find('img.preview')
		var $activeS = $layerS.find('a.active');
		$imgS.attr('src',$activeS.data('image'));
	})();
	//tab not active
	$('img.preview').each(function(index) {
		activeLabel = $(this).parents('.tab').find('a.link').attr('data-rel');
		activeImg = $('.layer-content a[data-rel="'+activeLabel+'"]').attr('data-image');
		$(this).attr('src',activeImg);
	});

	var setActive = function() {
		// clear active
		$(".tab.location .layer-country").find("a.active").removeClass("active");

		if(typeof activePage !== "undefined" && activePage !== null)
		{
			if(activePage === "group" || activePage === "home")
			{
				if(activePage === "group")
				{
					$('.tab.group').addClass('active');
				}
				else
				{
					$('#navigation-bar .home').addClass('active');
				}
			}
			else
			{		
				var $activePage = $('a[data-rel="'+activePage+'"]');
				var $activeTab 	= $activePage.closest('.tab');
				var activeLabel = $activePage.html();
				var activeRef 	= $activePage.attr('href');
				
				
				$activeTab.children('a').attr({'href': activeRef})
										.html(activeLabel);
											
				$activeTab.addClass('active');
			}
			
		}
	};
	
	setActive();
	
	$('#navigation-bar .tab .layer-content a[data-image]').each(function() {
		var $this = $(this),
			$img = $this.parents('.layer-content').find('img.preview'),
			active = $this.parents('.layer-content').find('a.active').data('image');
		
		$this.bind('mouseover', function() {
			$img.attr('src', $this.data('image'));
		});
		$this.bind('mouseout', function() {
			$img.attr('src', active);
		});
	});
	
	/* Footer Sitemap */
	$('#footer .sitemap .link').bind('click', function() {
		var $parent = $(this).parent();
		
		if( $parent.hasClass('open') ) {
			$parent.removeClass('open', 500);
		}
		else {
			$parent.addClass('open', 500);
		}
	});
	
	/* Footer Country-Select */
	$('#footer .country-selector').click(function(event) {
		event.preventDefault();
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).parent().find('.footer-country-select-content').slideDown(500);
		}
		else {
			$(this).removeClass('active');
			$(this).parent().find('.footer-country-select-content').slideUp(500);
		}
		return false;
	});
	
	/* Fix Paragraph height */
	$('#content .paragraph').each(function() {
		if (!$(this).hasClass('float')) {
			$(this).css('min-height', ($(this).find('.image').height() + 30) + 'px');
		}	
	});
	
	/* Apps & Infos */
	function appsInfos() {
		$('.apps-infos[data-url]').each(function() {
			var $this = $(this),
				url = $this.data('url');
			
			$this.html('<div class="ajax-loader"></div>');
			
			if( $this.data('location') && $this.data('location') != '' ) {
				url += '?location=' + $this.data('location') + '&label=' + encodeURIComponent($this.data('label'));
			}
			
			$.ajax({
				cache: $('#login .button').hasClass('logged out'),
				url: url,
				dataType: 'html',
				success: function(data) {
					if( $(data).find('.tabs-content ul li').length ) {
						$this.appsAndInfos(data);
					}
					else {
						$this.html('');
						$this.parents('.shadowbox').hide();
					}
				}
			});
		});
	}
	appsInfos();
	

	/* akkordeon */	
	$('.akkordeon_element .akkordeon_headline').on('click',function(e){
		var $akkordeon = $(this).closest('.akkordeon');
		var isToggle = $akkordeon.hasClass('toggle');
		var isOpen = $(this).closest('.akkordeon_element').hasClass('open');
		if (!isToggle){
			$akkordeon.find('.akkordeon_element').each(function(){
				$(this).removeClass('open');
				$(this).addClass('closed');
			});
		}
		if (!isOpen || isToggle) $(this).closest('.akkordeon_element').toggleClass('open closed');
		if($(this).attr("id")) {
			doNotUpdateHash = true;
			location.hash = $(this).attr("id").replace("accordion-","");
		}
	});
	
	
	/* table office import workaround */
	$('.content-table th > table').each(function() {
		var stopFor = false;
		var $this = $(this);
		for(var i = 0; i<=10; i++){
			if(!($(this).parent().is('.content-table')) && stopFor==false) {
				$this.unwrap();
			}
			else {
				stopFor = true;
			}
		}
	});
	
	/* tables */
		$('.content-table table').each(function() {
			if(!$(this).hasClass('has-width')){
				var cols = 0;
				$(this).find('tr').each(function() {
					if ($(this).find('td').length > cols) {
						cols = $(this).find('td').length;				
					}	
				});
				cols = 100 / cols;
				$(this).find('td').css('width', cols + '%');	
			}
		});
		$('.content-table table.sortable').tablesorter({widgets: ['zebra']});	
	
	/* pagination */	
	var paginationCount = 1;
	$('.pagination').each(function() {		
		if (!$(this).hasClass('backend-paging')) {			
			var count = $(this).find('.pagination-content > li').length;
			var contentId = 'pagination-content-' + paginationCount;
			var menuLength = 4;
			var itemsPage = $(this).attr('data-items-page');		
			if ($('body.wide').length > 0 || $('body.full').length > 0) {
				menuLength = 10;
			}		
			$(this).find('.items-page a').each(function() {
				if ($(this).html() == itemsPage) {
					$(this).addClass('active');
				}
			});			
			$(this).find('.pagination-content').attr('id', contentId);		
			$(this).find('.pagination-menu').smartpaginator({ 
				totalrecords: count,
				recordsperpage: parseInt(itemsPage),
				length: menuLength,
				controlsalways:true,
				datacontainer: contentId, 
				dataelement: 'li'
			});		
		}
	});
	
	$('.pagination .items-page a').click(function(event) {
		if (!$(this).parents('.pagination').hasClass('backend-paging')) {	
			event.preventDefault();		
			var count = $(this).parents('.pagination').find('.pagination-content > li').length;
			var contentId = $(this).parents('.pagination').find('.pagination-content').attr('id');
			var menuLength = 5;
			var itemsPage = $(this).html();
			if ($('body.wide').length > 0 || $('body.full').length > 0) {
				menuLength = 10;
			}
			$(this).parents('.items-page').find('a').removeClass('active');
			$(this).addClass('active');
			$(this).parents('.pagination').find('.pagination-menu').smartpaginator({ 
				totalrecords: count,
				recordsperpage: parseInt(itemsPage),
				length: menuLength,
				controlsalways:true,
				datacontainer: contentId, 
				dataelement: 'li'
			});
			return false;
		}
	});
	
	/* filter */
	$('.newslist.backend-paging .filter select').on('change', function() {
		$(this).parents('form').submit();	
	});	
	
	/* Gallery */
	setTimeout(function() {	// Timeout important for CMS!
		var tn1 = $('.image-gallery.tn3').tn3({
			skinDir:'/tn3/skins/tn3-intranet',
			imageClick:"fullscreen",
			image:{
				maxZoom:1,
				crop:false,
				clickEvent:"dblclick",
				transitions:[
					{
						type:"blinds"
					},{
						type:"grid"
					},{
						type:"grid",
						duration:460,
						easing:"easeInQuad",
						gridX:0,
						gridY:0,
						// flat, diagonal, circle, random
						sort:"random",
						sortReverse:false,
						diagonalStart:"bl",
						// fade, scale
						method:"scale",
						partDuration:360,
						partEasing:"easeOutSine",
						partDirection:"left"
					}
				]		
			}
		});
		
	/* Album */
		var tnLighbox;
		$('.image-gallery.album > ul a').click(function(event) {
			event.preventDefault();
			
			var html = '<div class="image-gallery tn3 zoom"><div class="tn3 album"><ol>',
				imgNumber = $(this).parents('li').prevAll().length;
			
			$(this).parents('ul').find('li').each(function() {
				html += '<li><h4>' + $(this).find('h4').html() + '</h4>' + '<div class="tn3 description">' + $(this).find('p').html() + '</div><a href="' + $(this).find('a').attr('href') + '"><img src="' + $(this).find('a').attr('data-lighbox-thumb') + '" /></a></li>';
			});
			html += '</ol></div></div>';
			
			$.colorbox({
				html: html, 
				height: 607,
				width: 730,
				title: '<span>' + $(this).parents('.image-gallery.album').attr('data-lighbox-title') + '</span>', 
				opacity: 0.6, 
				transition: 'none',
				scrolling: false,
				onComplete: function() {
					tnLighbox = $('.image-gallery.tn3.zoom').tn3({
						skinDir:'',
						imageClick:'fullscreen', 
						iniAlbum: 0,
						iniImage: imgNumber,
						image:{
							maxZoom:1,
							crop:false,
							clickEvent:"dblclick",
							transitions:[
								{
									type:"blinds"
								},{
									type:"grid"
								},{
									type:"grid",
									duration:460,
									easing:"easeInQuad",
									gridX:0,
									gridY:0,
									// flat, diagonal, circle, random
									sort:"random",
									sortReverse:false,
									diagonalStart:"bl",
									// fade, scale
									method:"scale",
									partDuration:360,
									partEasing:"easeOutSine",
									partDirection:"left"
								}
							]		
						}
					});
				}
			});
			
			return false;		
		});
	},0);



	/* Accordeon */
	$('.accordeon .item-header').click(function() {
		var $height = $(this).next('.item-content').height();
		$(this).next('.item-content').find('.col2').each(function(){
			if ($(this).height()<($height-54))$(this).height($height);
		});
		if (!$(this).parents('li').hasClass('open')) {
			if ($('body').hasClass('wide')) {				
				$(this).css('background-position','-5036px 0');
			}
			else if ($('body').hasClass('full')) {
				$(this).css('background-position','-15052px 0');
			}
			else {
				$(this).css('background-position','-1932px 0');
			}		
			$(this).parents('li').css('padding-bottom','5px').find('.item-content').slideDown(300,function() {
				$(this).parents('li').addClass('open');				
			});
		}
		else {			
			$(this).parents('li').find('.item-content').slideUp(300,function() {				
				$(this).parents('li').css('padding-bottom','0');
				if ($('body').hasClass('wide')) {
					$(this).parents('li').find('.item-header').css('background-position','-3580px 0');
				}
				else if ($('body').hasClass('full')) {
					$(this).parents('li').find('.item-header').css('background-position','-16032px 0');
				}
				else {					
					$(this).parents('li').find('.item-header').css('background-position','-980px 0');
				}
				$(this).parents('li').removeClass('open');					
			});
		}	
	});
	
	/* Tabs */
	$('#content > .tabs').each(function() {
		if ($(this).find('.tabs-menu li.active').prevAll().length > 0) {
			$(this).find('.tabs-menu li.active').prev().css('padding-right', '10px');			
		}
		var width = 0;
		$(this).find('.tabs-menu li').each(function() {		
			width += $(this).width()  + parseInt($(this).css('padding-left').replace('px', '')) + parseInt($(this).css('padding-right').replace('px', ''));
		});
		if ($(this).find('.spacer').length <= 0) {		
			$(this).append('<div class="spacer"></div>');
			$(this).find('.spacer').css('width', ($(this).width() - width) + 'px').css('left', width + 'px');
		}
		$
	});
	$('#content > .tabs .tabs-menu a').click(function(event) {
		event.preventDefault();
		if (!$(this).parents('li').hasClass('active')) {
			$(this).parents('ul').find('li.active').removeClass('active').prev().css('padding-right', '0');;
			$(this).parents('li').addClass('active');
			if ($(this).parents('li').prevAll().length > 0) {
				$(this).parents('li').prev().css('padding-right', '10px');			
			}
			$(this).parents('.tabs').find('.tabs-content li.active').removeClass('active');
			$($(this).attr('href')).addClass('active');
		}	
		return false;
	});
	
	
		
	$('.breadcrumb-home').click(function() {
		$.cookie('clickedOtherLocation',null,{path: '/'});
		$.cookie('clickedOtherSector',null,{path: '/'});
	});

	// Content-Iframe
	$('a.content-iframe').click(function(event) {
		event.preventDefault();
		contentWidth = $('#content').width()-2;
		$('#content').empty().append('<div class="iframe-app"><div class="iframe"><iframe src="'+$(this).attr('href')+'" width="'+contentWidth+'px" height="'+$(this).attr('data-height')+'" scrolling="auto" frameborder="0"></iframe></div></div>');
	});
	// Content-Iframe (hidden - Redirect page)
	$('a.content-iframe.hidden').each(function() {
		contentWidth = $('#page').width()-2;
		$('#page').empty().append('<div class="iframe-app"><div class="iframe" style="width: 978px"><iframe src="'+$(this).attr('href')+'" width="'+contentWidth+'px" height="'+$(this).attr('data-height')+'" scrolling="auto" frameborder="0"></iframe></div></div>');
	});
	// Redirect-Blank (hidden - Redirect page)
	$('a.redirect-blank.hidden').each(function() {
		window.open($(this).attr('href'),'_blank');
		return false;
	});
	
	
	/* Infoboxes without text */
	
	$('.shadowbox .text-img').each(function() {
		if($(this).find('p').length == 0){
			$(this).find('img').css('float', 'none');
		}
		if($(this).parents('.info-boxes').length == 0) {
			var height = $(this).find('img').height();			
			var height1 = $(this).find('h3').height();
			var height2 = height + height1 + 4;
			$(this).css('min-height', height2);
		}
	});
	
	//Insert last page modification
	$('.cms-info.hidden').each(function() {
		var cmsInfoContent = "<p class=\"cms-info\">"+$(this).html();+"</p>";
		$('.footer-content').prepend(cmsInfoContent);
	});

	
	$(window).bind("hashchange", hashRouter);
	window.setTimeout(function() {
		hashRouter(null, false);
	}, 10);
	
});

/* Event Kalender, RADIGEWSKI Informatik */
function initCalendarWidget() {
	$(".popups").hide();
    $(".caltag-item").parent().addClass("caltag-item-parent").hover(function() {
        $(this).addClass("active");
    }, function() {
        $(this).removeClass("active");
    });
	
    $(document).tooltip({
        items : ".caltag-item-parent",
        content : function() {
            return $("#" + $(this).children("a").attr("rel") + "").html();
        },
        position : {
            my : "center top+4"
        },
        close: function( event, ui ) {
            ui.tooltip.hover(
                function () {
                    $(this).stop(true).fadeTo(400, 1); 
                },
                function () {       
                      
                    $(this).fadeOut("40", function(){ $(this).remove(); })
                }
            );
          }
    });
}
$(function() {
	initCalendarWidget();
});

/*
 *  Pager, RADOGEWSKI Informatik
 *  parentSelector = jQuery-Selector für das Eltern-Element, $(parentSelector).children() werden als Seiten verwendet
 *  pagerSelector = jQuery-Selector für die Pager-Controls (prevElm, nextElm)
 *  opt = Options, s. unten
 */
var Pager = function(parentSelector, pagerSelector) {
    /*  possible options
     *  active : erstes akitves Element, entspricht $(parentSelector).children().eq(active)
     *  disabledClassName : classname von pevElm/nextElm, wenn inaktiv
     *  update : {  attr : "das attribut, das aus dem aktiven Element ausgelesen werden soll",
     *              //update von elementen mt dem wert aus attr der aktuellen Seite
     *              "current": { selector:"jQuery Selector des Elements", prop:"property zum updaten: html,text,x-beliebig" }, 
     *              //update von elementen mt dem wert aus attr der vorherigen Seite
     *              "prev":{ wie oben }, 
     *              //update von elementen mt dem wert aus attr der nächsten Seite
     *              "next":{ wie oben }
     *          }
     */
    var options = {
            disabledClassName : "inactive",
            active : 0,
            update : {}
    };
    var self = this;
    /*
     *  default options überschreiben
     */
    var opts = [].slice.call(arguments)[2] || {};
    this.options = $.extend(options,opts);
    this.position = 0;
     
    var pagerElement = $(pagerSelector);
    var elements = $(parentSelector).children();
    var max = elements.length;
     
    var init = function() {
        log("init, options", options);
        var active = options.active;
        switchTo(active);
    };
     
    /*
     * Pager-Controls und click-functions
     * click-functions werden durch updatePager gesetzt oder entfernt
     */
    var nextElm = pagerElement.children(".next");
    var next =  function() { switchTo(self.position+1);$(this).blur();  };
     
    var prevElm = pagerElement.children(".prev");
    var prev = function() { switchTo(self.position-1);$(this).blur(); };
     
    /*
     * i = aktuelle position
     */
    var switchTo = function(i) {
        updatePager(i);
        hideElements();
        showElement(i);
    };
     
    /*
     *  Updated die einzelnen Pager-Elemente
     */
    var updatePager = function(i) {
        var that = self;
         
        /* handle prevElm
         * solange die aktuelle Position != 0 ist, bleibt prevElm aktiv
         * sonst wird deaktiviert und die values aus update mit "" überschrieben
         */
        prevElm.off("click");
        if(i != 0) {
            prevElm.on("click", prev).removeClass(that.options.disabledClassName);
            update("prev",i-1);
            log("enabling prev");
        } else {
            prevElm.addClass(that.options.disabledClassName);
            update("prev",i,"");
        }
         
        /*
         * handle nextElm
         * die aktuelle position kleiner als die Anzahl der Elemente-1 ist, ist nextElm aktiv
         * sonst wird deaktiviert und die values aus update mit "" überschrieben
         */
        nextElm.off("click");
        if(i < max-1) {
            log("enabling next");
            nextElm.on("click", next).removeClass(that.options.disabledClassName);
            update("next",i+1);
        } else {
            nextElm.addClass(that.options.disabledClassName);
            update("next",i,"");
        }
         
        update("current",i);
    };
     
    /*  ließt die update-Options aus
     *  und updated entsprechend des types die props des selectors
     *  mit dem attr von dem elements[i]
     *  wenn overwrite gesetzt ist, wird der entsprechende Wert überschrieben
     */
    var update = function(type, position, overwrite) {
        log("Updateing", type, position, overwrite)
        //es muss update.type und update.attr Objects geben
        if(self.options.update.hasOwnProperty(type) && self.options.update.hasOwnProperty("attr")) {
             
            //das attribut-value, das gesetzt werden soll
            var att = self.options.update.attr;
            //wenn overwrite gesetzt ist, kein attr-value auslesen, sondern mit dem Wert setzen
            var val = overwrite!=undefined?overwrite:elements[position].getAttribute(att);
            var opt = self.options.update[type];
            log("setting value ", val, "from attribute", att);
             
            //über die Einträge in opt iterieren
            for(var i=0,j=opt.length;i<j;i++) {
                var prop = opt[i].prop;
                var sel = $(opt[i].selector);
                 
                //Imm Zweifel wird immer attr(prop) gesetzt
                switch(prop) {
                    case "html":
                        sel.html(val);
                        break;
                    case "text":
                        sel.text(val);
                        break;
                    default:
                        sel.attr(prop,val);
                }
                 
            }
        }
    };
     
    var showElement = function(i) {
        log("showing", i);
        self.position = i;
        elements.eq(i).show();
    };
    var hideElements = function() {
        elements.hide();
    };
     
    var log = function() {
        try {
            if(window.console) {
                window.console.log.apply(this, [].slice.call(arguments));
            }
        } catch(e) {}
    }
     
     
    init();
}
var getNumberForYear = function(parent,attr,val) {
    var ret = 0;
    var att = attr;
    var valu = val;
    $(parent).children().each(function(i) {
        if($(this).attr(att) == valu) {
            ret = i;
        }
    });
    return ret;
}



$(document).ready(function() {
	if($("#eventpager").length > 0) {
		if($("#eventlistPages").children().length != 1) {
			$("#eventpager").parent().show();
		}
		var p = new Pager("#eventlistPages","#eventpager",{ disabledClassName : "disabled", 
				update : { 
					attr: "data-year",
					current:[{ selector:"#eventsHeadline", prop : "html" }],
					prev: [{ selector:"#eventpager > .prev", prop:"title" }, { selector:"#eventpager .eventYearPrev", prop:"html" }],
					next: [{ selector:"#eventpager > .next", prop:"title" }, { selector:"#eventpager .eventYearNext", prop:"html" }]
				}}
		);
		
	}
});



/* *****************************************
 * imagemap Lightbox
 * *****************************************/
$(document).ready(function() {

	$("[rel='colorboxImagemap']").on('click', function () {
		$(this).colorbox({
			href: $(this).attr('href'), 
			iframe: true, 
			overlayClose: false, 
			innerWidth: '50%', 
			innerHeight: '50%', 
			opacity: 0.6, 
			transition: 'none'
		});	
	})


})



/* *****************************************
 * link_to_video Lightbox
 * *****************************************/
$(document).ready(function() {

	$("[rel='colorboxLinktovideo']").on('click', function () {

		var playerWidth= 530 + (10/3);
		var boxWidth= playerWidth;
		var playerHeight= 300;
		var boxHeight= playerHeight;
		var playerId = $(this).attr('data-playerid');
		var playerImg = $(this).attr('data-preview');
		var playerVideo = $(this).attr('href');
		var playerTitle= $(this).attr('data-title');
		var playerDescription= $(this).attr('data-desc');
		
		if(playerDescription.length > 0) {
			
			$('body').append('<div id="height-test" style="width: ' + playerWidth + 'px; opacity: 0; float: left;"><p style="padding: 10px;">' +  playerDescription+ '</p></div>');
			console.log( $('#height-test').height() );
			boxHeight = playerHeight + $('#height-test').height();
			$('height-test').remove();

			var playerHtml = '<div id="'+playerId+'"></div><div><p style="padding: 10px;">' +  playerDescription+ '</p></div>';
			
		} else { var playerHtml = '<div id="'+playerId+'"></div>'; }
			
		

		$(this).colorbox({
			overlayClose: false, 
			innerWidth: boxWidth, 
			innerHeight: boxHeight, 
			opacity: 0.6, 
			transition: 'none',
			title: playerTitle,
			html: playerHtml,
			onComplete:function() {
				console.log('completed');
				console.log('#' + playerId);
				console.log($('#' + playerId));
				
				jwplayer(playerId).setup({
					'flashplayer': '/media/system_files/flash/player.swf',
					'html5player': '/media/system_files/js/jwplayerhtml5.js',
					'autostart': true,
					'image': playerImg,
					'file': playerVideo,
					'height': playerHeight,
					'width': playerWidth,
					'stretching': 'fill',
					analytics: {
						cookies: false,
						enabled: false
					}
				});
				$('#' + playerId + '_wrapper').parent().css('overflow', 'hidden');
			}
		});	
	})
})



/**
*  RSS Ticker, RADIGEWSKI Informatik
*/
var maxheight;
var dy=1;
var tmpcdy=-1;
var cdy;
var le=null;
var fe=null;
var items;
$(document).ready(function() {
	if($(".rss").length > 0) {
		var currt=0;
		cdy=-dy;
		maxheight= $(".rss .container").height()-0;
		items=$(".rss .container .listing");
		fe=$(items[0]);
		items.each(function(){
			$(this).css("top",currt+"px");
			$(this).css("position","absolute");
			currt+=$(this).outerHeight();
					
		});
		le=$(items[items.length-1]);
		if(currt>maxheight-30) {
			window.setInterval("vticker()",80);
		} else {
			$(".rss .up").hide();
			$(".rss .down").hide();
		}
		
		$(".rss").mouseout(function() {
			cdy=tmpcdy;
		});
	};
	
	$("[rel='colorboxVideo']").colorbox({ iframe:true,  innerWidth: 640, innerHeight: 390 });
	
	changeFavicon("/media/system_files/img/favicon.ico");
})
function vticker() {
	var fev=null;
	var lev=null;
	items.each(function(){
		var t=Number($(this).css("top").replace("px",""));
		var h=$(this).outerHeight();
			
		
		if(t<=maxheight && (t+h)>=0 ) {
			if(!fev) {
				fev=$(this);
			} else if(Number(fev.css("top").replace("px",""))>t) {
				fev=$(this);
			}
			if(!lev) {
				lev=$(this);
			} else if(Number(lev.css("top").replace("px",""))<t) {
				lev=$(this);
			}
			$(this).css("top",String(t+cdy)+"px");
			$(this).attr("isv","true");
		} else {
			$(this).attr("isv","false");
		}
	});
	if(fev) {
		t=Number(fev.css("top").replace("px",""));
		if(t>0) {
			var p=fev.prev("DIV");
			if(p.length==0) {
				p=le;
			}
			if(p.attr("isv")=="false") {
				p.css("top",String(t-p.outerHeight())+"px");
			}
		}
		t=Number(lev.css("top").replace("px",""))+lev.outerHeight();
		if(t<maxheight) {
			var p=lev.next("DIV");
			if(p.length==0) {
				p=fe;
			}
			if(p.attr("isv")=="false") {
				p.css("top", t+"px");
			}
		}
	} else { // e.g. 1 News
		if(cdy>0) {
			fe.css("top",fe.outerHeight()+"px");
		} else {
			fe.css("top",maxheight+"px");
		}
	}
}

function colorPlayer(elm) {
	var player = $(elm).prev().first();
	
	player.css({ "overflow":"inherit", "height":"auto",padding:"30px"});
	$.colorbox({inline:true, href:player, onClosed: function() { player.css({ "overflow":"hidden", "height":"0",padding:"0"}); } });
	return false;
}

if($('#videoplayer').length) {
	function getItemTitle(item) {
		return item.hasOwnProperty("titleDisplay")? item.titleDisplay : item.title;
	}
	var videoplayer = {	
		debug: 0, //levels: 0, 1, 2, 3
		playlist: playlist,
		init: 0,
		current_item: 'item_0',
		current_index: 0,
		old_item: '',
		old_index: -1,
		log: function (msg, color, fw) {
			color = color || "black";
			fw = fw || "normal";
			console.log("%c" + msg, "color:" + color + "; font-weight:" + fw + ";");
		},
		playlistLoaded: function() {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: playlistLoaded', 'green', 'bold');
			for(var i = 0; i < videoplayer.playlist.length; i++) {
				if(videoplayer.debug >= 3) videoplayer.log(' --- added playlistitem', 'orange', 'normal');
				//if(i == 0) {videoplayer.changeVideoText(i);}
				$('#videoplayer #textarea').removeClass('hidden');
				var html = '';
					html +='<div class="playlistitem" id="item_' + videoplayer.playlist[i].mediaid + '">';
					html +='<span class="mediaid hidden">' + videoplayer.playlist[i].mediaid + '</span>';
					html +='<div class="image">';
					html +='<img src="' + videoplayer.playlist[i].thumbnail + '">';
					html +='</div>';
					html +='<div class="content">';
					html +='<h2>' + getItemTitle(videoplayer.playlist[i]) + '</h2>';
					html +='</div>';
					html +='</div>';
								
				$('#videoplayer > #playlist').append($(html));
			}
			videoplayer.registerEventListeners();
		},
		playThis: function (i) {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: playThis', 'green', 'bold');
			jwplayer("player").playlistItem(i);

		},
		playLinkedVideo: function () {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: playLinkedVideo', 'green', 'bold');
			if (videoplayer.getUrlHash()) {
				var target_video = videoplayer.getUrlHash();
				var found = false;
				var i = 0;
				while (found == false) {
					if(videoplayer.playlist[i]['uid'] == target_video) {
						found = true;
						videoplayer.playThis(i);
					} else {
						i++;
						if(i >= videoplayer.playlist.length) { break; }
					}
				}
			}

		},
		getUrlParameter: function (sParam) {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: getUrlParameter', 'green', 'bold');
   			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        	sURLVariables = sPageURL.split('&'),
        	sParameterName,
        	i;

    		for (var i = 0; i < sURLVariables.length; i++) {
        		sParameterName = sURLVariables[i].split('=');

        		if (sParameterName[0] === sParam) {
            		return sParameterName[1] === undefined ? true : sParameterName[1];
        		}
    		}

		},
		setUrlParameter: function (param, newval, search) {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: setUrlParameter', 'green', 'bold');
			var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
			var query = search.replace(regex, "$1").replace(/&$/, '');
			return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');

		},
		getUrlHash: function () {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: getUrlHash', 'green', 'bold');
   			var hash = window.location.hash; 
			var target_hash = hash.substring(hash.lastIndexOf('#') + 1, hash.length);
			return target_hash;

		},
		changeVideoText: function (index) {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: changeVideoText', 'green', 'bold');
			if(videoplayer.debug >= 2) videoplayer.log(' -- call: getVideoDimension');
			videoplayer.getVideoDimension(
  				videoplayer.playlist[index].sources[0].file, 
  				function(w,h){videoplayer.resizePlayer(w,h);}
			);

			if(videoplayer.debug >= 2) videoplayer.log(' -- exchange old/new video cursor');
			videoplayer.old_item = videoplayer.current_item;
			videoplayer.old_index = videoplayer.current_index;
			videoplayer.current_item = '#item_' + videoplayer.playlist[index].mediaid;
			videoplayer.current_index = $(videoplayer.current_item).attr('id').split("_")[1];

			if(videoplayer.debug >= 3) { 
				videoplayer.log(' --- old_item: ' + videoplayer.old_item, 'orange', 'normal');
				videoplayer.log(' --- old_index: ' + videoplayer.old_index, 'orange', 'normal');
				videoplayer.log(' --- current_item: ' + videoplayer.current_item, 'orange', 'normal');
				videoplayer.log(' --- current_index: ' + videoplayer.current_index, 'orange', 'normal');
			}

			if(videoplayer.debug >= 2) videoplayer.log(' -- exchange textarea text');
			$('#videoplayer > #textarea > h1').html(getItemTitle(videoplayer.playlist[index]) || "");
			$('#videoplayer > #textarea > p').html(videoplayer.playlist[index].description || "");
			if(videoplayer.debug >= 2) videoplayer.log(' -- exchange download link');
			if(videoplayer.playlist[index].download) {
				$('#textarea .download a').attr("href", videoplayer.playlist[index].sources[0].file || "");
				if(typeof videoplayer.playlist[index].sources[0].type != 'undefined') {
					$('#textarea .download .type').text( ( videoplayer.playlist[index].sources[0].type + '-' ).toUpperCase().trim() || "");
				} else {
					if(videoplayer.debug >= 1) videoplayer.log(' --- type of item source is undefined! ', 'red', 'bold');
					//$('#textarea .download .type').text('GENERIC');
				}
				
				$('#textarea .download .size').text( ' (' + videoplayer.playlist[index].size + ')' );
				$('#textarea .download').removeClass('hidden');
			} else {
				$('#textarea .download').addClass('hidden');
			}
			
			// Altes Element deaktivieren
			if(videoplayer.debug >= 2) videoplayer.log(' -- deactivate old element');
			$(videoplayer.old_item).removeClass('active');
			
			/* Altes Element zurücksortieren
			if(videoplayer.debug >= 2) videoplayer.log(' -- resort old element');
			for (var i = videoplayer.old_index; i >= 0; i--) {
				$('#videoplayer #playlist').prepend($('#item_'+i));
			}*/							
						
			// Neues Element aktivieren 
			if(videoplayer.debug >= 2) videoplayer.log(' -- activate new element');
			$(videoplayer.current_item).addClass('active');
			//$('#videoplayer #playlist').prepend($(videoplayer.current_item));

			$(window).scrollTop(0);
			
			// Soll window.location.search auf jedes Video anpassen. Wäre voll geil, können IE8/IE9 aber nicht und der IE10 nur teilweise (je nach Revision)
			//if (! (index == 0 && videoplayer.getUrlParameter('videoid').length == 0) ) window.location = window.location.pathname + videoplayer.setUrlParameter('videoid', videoplayer.playlist[index]['uid'], window.location.search) + window.location.hash;

		},
		registerEventListeners: function () {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: registerEventListeners', 'green', 'bold');
			$('.playlistitem').on('click', function (e) {
				if(videoplayer.debug >= 1) videoplayer.log(' --- triggered event: registerEventListeners', 'purple', 'bold');
				var mediaid = Number($(this).children('span.mediaid').text());
				jwplayer("player").playlistItem(mediaid);
			})

		},
		getVideoDimension: function (url, fnCallback){

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: getVideoDimension', 'green', 'bold');
			var video=document.createElement("video");
			video.autoplay=true;
			video.oncanplay=function(){
				fnCallback(this.offsetWidth, this.offsetHeight);
				this.src="about:blank";
				document.body.removeChild(video);   
			};

			document.body.appendChild(video);
			video.src=url;

		},
		resizePlayer: function (w,h) {

			if(videoplayer.debug >= 1) videoplayer.log(' - run fn: resizePlayer', 'green', 'bold');
			var ratio = h/w;
			//jwplayer("player").resize(480,480*ratio); 

		}
	}


	jwplayer("player").setup({
		'flashplayer': '/media/system_files/flash/player.swf',
		'html5player': '/media/system_files/js/jwplayerhtml5.js',
		'primary': 'flash',
		'autostart': false,
		'stretching': 'uniform',
		'width': 480,
		'height': 270,
		'controls': 'true',
       	'playlist': videoplayer.playlist,
		events: {
			onPlaylistItem: function(obj) {
				if(videoplayer.debug >= 1) videoplayer.log(' event: onPlaylistItem', 'blue', 'bold');
				videoplayer.changeVideoText(obj.index);
			},
			onPlaylist: function() {
				if(videoplayer.debug >= 1) videoplayer.log(' event: onPlaylist', 'blue', 'bold');
				if(videoplayer.init == 0) {
					videoplayer.playlistLoaded();
					videoplayer.init = 1;
					videoplayer.playLinkedVideo();
				}
			}
		} 
    });
}
    
