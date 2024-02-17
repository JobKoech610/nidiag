var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


/**
* @visibilité des groupes gmaccess

*/
function openaccessgma() {
	document.getElementById('moinsgm').style.display = 'block'; 
	document.getElementById('plusgm').style.display = 'none'; 
	document.getElementById('tabacces').style.display = 'block'; 
	document.getElementById('tabaccesf').style.display = 'none';
}
function closeaccessgma() {
	document.getElementById('moinsgm').style.display = 'none'; 
	document.getElementById('plusgm').style.display = 'block'; 
	document.getElementById('tabacces').style.display = 'none'; 
	document.getElementById('tabaccesf').style.display = 'block';
}
function checkall_gm( aco, n ) {
	for ( var j = 2; j <= n; j++ ) {
		document.getElementById("cb" + aco + n).checked=true;
	}
}
function testacl1( aco, tot ) {
	if(document.getElementById('public'+aco).checked==true) {
		if (document.getElementById('membre'+aco)){ document.getElementById('membre'+aco).checked=false; document.getElementById('membre'+aco).disabled=true;}
		if (document.getElementById('gmread')) document.getElementById('gmread').checked=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).checked=false;
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).disabled=true;
		}
	}else{
		if (document.getElementById('gmread')) document.getElementById('gmread').checked=true;
		if (document.getElementById('membre'+aco))document.getElementById('membre'+aco).disabled=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).disabled=false;
		}
	}
}
function testacl2( aco, tot ) {
	if(document.getElementById('membre'+aco).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		if (document.getElementById('gmread')) document.getElementById('gmread').checked=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).checked=false;
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).disabled=true;
		}
	}else{
		if (document.getElementById('gmread')) document.getElementById('gmread').checked=true;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cbread' + j)) document.getElementById('cbread' + j).disabled=false;
		}
	}
}
function testacl3( aco, i ) {
	if(document.getElementById('cb'+aco+i).checked==true) {
		if (document.getElementById('public'+aco)) {document.getElementById('public'+aco).checked=false; document.getElementById('public'+aco).disabled=false;}
		if (document.getElementById('gmread')) document.getElementById('gmread').checked=true;
		if (document.getElementById('membre'+aco)) {document.getElementById('membre'+aco).checked=false; document.getElementById('membre'+aco).disabled=false;}
	}
}
function testacl4( aco, tot ) {
	if(document.getElementById('public'+aco).checked==true) {
		if (document.getElementById('membre'+aco)) {document.getElementById('membre'+aco).checked=false; document.getElementById('membre'+aco).disabled=true;}
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').checked=false;
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').disabled=true;
		if (document.getElementById('public'+aco+'own')) {document.getElementById('public'+aco+'own').checked=false; document.getElementById('public'+aco+'own').disabled=true;}
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
			if (document.getElementById('cb'+aco+'own' + j)) document.getElementById('cb'+aco+'own' + j).disabled=true;
			if (document.getElementById('cb'+aco+'own' + j)) document.getElementById('cb'+aco+'own' + j).checked=false;
		}
	}else{
		if (document.getElementById('public'+aco+'own')) document.getElementById('public'+aco+'own').disabled=false;
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').disabled=false;
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).disabled=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
			if (document.getElementById('cb'+aco+'own' + j)) document.getElementById('cb'+aco+'own' + j).disabled=false;
		}
	}
}
function testacl5( aco, tot ) {
	if(document.getElementById('membre'+aco).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		if (document.getElementById('public'+aco+'own')) document.getElementById('public'+aco+'own').disabled=false;
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').disabled=true;
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').checked=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
			if (document.getElementById('cb'+aco+'own' + j)) {document.getElementById('cb'+aco+'own' + j).checked=false; document.getElementById('cb'+aco+'own' + j).disabled=true;}
		}
	}else{
		if (document.getElementById('membre'+aco+'own')) document.getElementById('membre'+aco+'own').disabled=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
			if (document.getElementById('cb'+aco+'own' + j)) document.getElementById('cb'+aco+'own' + j).disabled=false;
		}
	}
	
}
function testacl6( aco, i ) {
	if(document.getElementById('cb'+ aco + i).checked==true) {
		if (document.getElementById('public' + aco)) document.getElementById('public' + aco).checked=false;
		if (document.getElementById('public' + aco + 'own')) document.getElementById('public' + aco + 'own').disabled=false;
		if (document.getElementById('membre' + aco)) document.getElementById('membre' + aco ).checked=false;
		if (document.getElementById('membre' + aco + 'own')) document.getElementById('membre' + aco + 'own').disabled=false;
		if (document.getElementById('cb' + aco + 'own' + i)) document.getElementById('cb' + aco + 'own' + i).checked=false;
		if (document.getElementById('cb' + aco + 'own' + i)) document.getElementById('cb' + aco + 'own' + i).disabled=true;
	}else{
		if (document.getElementById('cb' + aco + 'own' + i)) document.getElementById('cb' + aco + 'own' + i).disabled=false;
	}
	
}
function testacl7( aco, aco2, tot ) {
	if(document.getElementById('public'+aco).checked==true) {
		if (document.getElementById('membre'+aco)) {document.getElementById('membre'+aco).checked=false;document.getElementById('membre'+aco).disabled=true;}
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
		}
	}else{
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).disabled=false;
		if (document.getElementById('membre'+aco2) && document.getElementById('membre'+aco2).checked==true){document.getElementById('membre'+aco).disabled=true;}
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
			if (document.getElementById('cb'+aco2 + j) && document.getElementById('cb'+aco2 + j).checked==true ) {document.getElementById('cb'+aco + j).disabled=true;}
		}
	}
}
function testacl8( aco, aco2, tot ) {
	if(document.getElementById('membre'+aco).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
		}
	}else{
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
			if (document.getElementById('cb'+aco2 + j) && document.getElementById('cb'+aco2 + j).checked==true ) {document.getElementById('cb'+aco + j).disabled=true;}
		}
	}
}
function testacl9( aco, i ) {
	if(document.getElementById('cb'+aco+i).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).checked=false;
	}
}
function testacl10( aco, tot ) {
	if(document.getElementById('public'+aco).checked==true) {
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).checked=false;
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).disabled=true;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
		}
	}else{
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).disabled=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
		}
	}
}
function testacl11( aco, tot ) {
	if(document.getElementById('membre'+aco).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).checked=false;
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=true;
		}
	}else{
		for ( var j = 2; j <= tot; j++ ) {
			if (document.getElementById('cb'+aco + j)) document.getElementById('cb'+aco + j).disabled=false;
		}
	}
}
function testacl12( aco, i ) {
	if(document.getElementById('cb'+aco+i).checked==true) {
		if (document.getElementById('public'+aco)) document.getElementById('public'+aco).checked=false;
		if (document.getElementById('membre'+aco)) document.getElementById('membre'+aco).checked=false;
	}
}
function gmimage( tot, path ) {
	
	if (document.getElementById('publicread')) {
		if(document.getElementById('publicread').checked==true) {
			document.getElementById('publiciread').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicread').disabled==true) {
				document.getElementById('publiciread').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publiciread').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membreread')) {
		if(document.getElementById('membreread').checked==true) {
			document.getElementById('membreiread').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membreread').disabled==true) {
				document.getElementById('membreiread').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreiread').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicsubmit')) {
		if(document.getElementById('publicsubmit').checked==true) {
			document.getElementById('publicisubmit').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicsubmit').disabled==true) {
				document.getElementById('publicisubmit').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicisubmit').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membresubmit')) {
		if(document.getElementById('membresubmit').checked==true) {
			document.getElementById('membreisubmit').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membresubmit').disabled==true) {
				document.getElementById('membreisubmit').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreisubmit').src = path+'/images/non_checked.gif';
			}
		}
	}
		if (document.getElementById('publicadd')) {
		if(document.getElementById('publicadd').checked==true) {
			document.getElementById('publiciadd').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicadd').disabled==true) {
				document.getElementById('publiciadd').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publiciadd').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membreadd')) {
		if(document.getElementById('membreadd').checked==true) {
			document.getElementById('membreiadd').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membreadd').disabled==true) {
				document.getElementById('membreiadd').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreiadd').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publiceditown')) {
		if(document.getElementById('publiceditown').checked==true) {
			document.getElementById('publicieditown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publiceditown').disabled==true) {
				document.getElementById('publicieditown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicieditown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membreeditown')) {
		if(document.getElementById('membreeditown').checked==true) {
			document.getElementById('membreieditown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membreeditown').disabled==true) {
				document.getElementById('membreieditown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreieditown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicedit')) {
		if(document.getElementById('publicedit').checked==true) {
			document.getElementById('publiciedit').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicedit').disabled==true) {
				document.getElementById('publiciedit').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publiciedit').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membreedit')) {
		if(document.getElementById('membreedit').checked==true) {
			document.getElementById('membreiedit').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membreedit').disabled==true) {
				document.getElementById('membreiedit').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreiedit').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicpublishown')) {
		if(document.getElementById('publicpublishown').checked==true) {
			document.getElementById('publicipublishown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicpublishown').disabled==true) {
				document.getElementById('publicipublishown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicipublishown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membrepublishown')) {
		if(document.getElementById('membrepublishown').checked==true) {
			document.getElementById('membreipublishown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membrepublishown').disabled==true) {
				document.getElementById('membreipublishown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreipublishown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicpublish')) {
		if(document.getElementById('publicpublish').checked==true) {
			document.getElementById('publicipublish').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicpublish').disabled==true) {
				document.getElementById('publicipublish').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicipublish').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membrepublish')) {
		if(document.getElementById('membrepublish').checked==true) {
			document.getElementById('membreipublish').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membrepublish').disabled==true) {
				document.getElementById('membreipublish').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreipublish').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicdeleteown')) {
		if(document.getElementById('publicdeleteown').checked==true) {
			document.getElementById('publicideleteown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicdeleteown').disabled==true) {
				document.getElementById('publicideleteown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicideleteown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membredeleteown')) {
		if(document.getElementById('membredeleteown').checked==true) {
			document.getElementById('membreideleteown').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membredeleteown').disabled==true) {
				document.getElementById('membreideleteown').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreideleteown').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicdelete')) {
		if(document.getElementById('publicdelete').checked==true) {
			document.getElementById('publicidelete').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicdelete').disabled==true) {
				document.getElementById('publicidelete').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publicidelete').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membredelete')) {
		if(document.getElementById('membredelete').checked==true) {
			document.getElementById('membreidelete').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membredelete').disabled==true) {
				document.getElementById('membreidelete').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreidelete').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('publicright')) {
		if(document.getElementById('publicright').checked==true) {
			document.getElementById('publiciright').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('publicright').disabled==true) {
				document.getElementById('publiciright').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('publiciright').src = path+'/images/non_checked.gif';
			}
		}
	}
	if (document.getElementById('membreright')) {
		if(document.getElementById('membreright').checked==true) {
			document.getElementById('membreiright').src = path+'/images/checked.gif';
		}else{
			if(document.getElementById('membreright').disabled==true) {
				document.getElementById('membreiright').src = path+'/images/checkedg.gif';
			}else{
				document.getElementById('membreiright').src = path+'/images/non_checked.gif';
			}
		}
	}
	for ( var j = 2; j <= tot; j++ ) {
		if (document.getElementById('cbread' + j)) {
			if(document.getElementById('cbread' + j).checked==true) {
				document.getElementById('ciread' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbread' + j).disabled==true) {
					document.getElementById('ciread' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('ciread' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbsubmit' + j)) {
			if(document.getElementById('cbsubmit' + j).checked==true) {
				document.getElementById('cisubmit' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbsubmit' + j).disabled==true) {
					document.getElementById('cisubmit' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cisubmit' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbadd' + j)) {
			if(document.getElementById('cbadd' + j).checked==true) {
				document.getElementById('ciadd' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbadd' + j).disabled==true) {
					document.getElementById('ciadd' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('ciadd' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbeditown' + j)) {
			if(document.getElementById('cbeditown' + j).checked==true) {
				document.getElementById('cieditown' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbeditown' + j).disabled==true) {
					document.getElementById('cieditown' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cieditown' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbedit' + j)) {
			if(document.getElementById('cbedit' + j).checked==true) {
				document.getElementById('ciedit' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbedit' + j).disabled==true) {
					document.getElementById('ciedit' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('ciedit' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbpublishown' + j)) {
			if(document.getElementById('cbpublishown' + j).checked==true) {
				document.getElementById('cipublishown' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbpublishown' + j).disabled==true) {
					document.getElementById('cipublishown' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cipublishown' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbpublish' + j)) {
			if(document.getElementById('cbpublish' + j).checked==true) {
				document.getElementById('cipublish' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbpublish' + j).disabled==true) {
					document.getElementById('cipublish' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cipublish' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbdeleteown' + j)) {
			if(document.getElementById('cbdeleteown' + j).checked==true) {
				document.getElementById('cideleteown' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbdeleteown' + j).disabled==true) {
					document.getElementById('cideleteown' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cideleteown' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbdelete' + j)) {
			if(document.getElementById('cbdelete' + j).checked==true) {
				document.getElementById('cidelete' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbdelete' + j).disabled==true) {
					document.getElementById('cidelete' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('cidelete' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
		if (document.getElementById('cbright' + j)) {
			if(document.getElementById('cbright' + j).checked==true) {
				document.getElementById('ciright' + j).src = path+'/images/checked.gif';
			}else{
				if(document.getElementById('cbright' + j).disabled==true) {
					document.getElementById('ciright' + j).src = path+'/images/checkedg.gif';
				}else{
					document.getElementById('ciright' + j).src = path+'/images/non_checked.gif';
				}
			}
		}
	}
}

}
/*
     FILE ARCHIVED ON 11:32:36 Mar 24, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:40:25 Feb 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.113
  cdx.remote: 0.116
  esindex: 0.01
  LoadShardBlock: 322.383 (6)
  PetaboxLoader3.datanode: 104.88 (7)
  load_resource: 58.785
  PetaboxLoader3.resolve: 38.54
*/