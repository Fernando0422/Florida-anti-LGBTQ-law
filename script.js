$(document).ready(function(){
  // Bills SB 1834 and HB 1557 will erase queer history and villainize the LBGTQ+ community pushing vulnerable young students into fear. 

var eraseSyn = ["obliterate", "wipe out", "demolish", "eradicate"]
var pushingSyn = ["forcing", "driving", "compelling"]
var vulnerableSyn = ["helpless", "powerless"]

var sentence1 = `Bills SB 1834 and HB 1557 will ${eraseSyn[Math.floor(Math.random()*eraseSyn.length)]} queer history and villainize the LBGTQ+ community ${pushingSyn[Math.floor(Math.random()*pushingSyn.length)]} ${vulnerableSyn[Math.floor(Math.random()*vulnerableSyn.length)]} young students into fear`
//first sentence is done yayyyy




// This ban will limit LGBTQ+ history and discussions, sending a clear message to queer youth in Florida and the rest of the world that being a part of the LGBTQ+ community is something to be ashamed of and needs to be hidden.
var banSyn = ["prohibition"]
var limitSyn = ["restrict", "destroy", "inhibit", "reduce", "constrict", "enclose", "decrease"]
var sendingSyn = ["transmitting", "announcing", "broadcasting"]
var clearSyn = ["precise", "exact", "explicit", "transparent", "obvious", "apparent", "unmistakable", "evident"]
var messageSyn = ["statement", "announcement", "note"]
var youthSyn = ["children", "people"]
var worldSyn = ["globe", "earth"]
var ashamedSyn = ["sorry", "embarrassed", "remorseful"]
var needsSyn = ["ought", "must", "requires"]
var hiddenSyn = ["suppressed", "concealed", "repressed", "secreted"]


var sentence2=`This ${banSyn[Math.floor(Math.random()*banSyn.length)]} will ${limitSyn[Math.floor(Math.random()*limitSyn.length)]} LGBTQ+ history and discussions, ${sendingSyn[Math.floor(Math.random()*sendingSyn.length)]} a ${clearSyn[Math.floor(Math.random()*clearSyn.length)]} ${messageSyn[Math.floor(Math.random()*messageSyn.length)]} to queer ${youthSyn[Math.floor(Math.random()*youthSyn.length)]} in Florida and the rest of the ${worldSyn[Math.floor(Math.random()*worldSyn.length)]} that being a part of the LGBTQ+ community is something to be ${ashamedSyn[Math.floor(Math.random()*ashamedSyn.length)]} of and ${needsSyn[Math.floor(Math.random()*needsSyn.length)]} to be ${hiddenSyn[Math.floor(Math.random()*hiddenSyn.length)]}`

//sentence 2 is done and works yayayayayyayaya


//It will increase and continue oppression towards the LBGTQ+ community, prevent students from learning about the world around them, and stop them from growing up in a world that strives to develop and innovate. 

var increaseSyn = ["grow", "rise", "advance", "expand", "boost"]
var preventSyn = ["stop", "control", "contain", "discourage", "deter", "avert"]
var learningSyn = ["knowing", "understanding", "comprehending", "discovering"]
var stopSyn = ["prevent", "control", "contain", "eliminate", "destroy"]
var strivesSyn = ["seeks", "aims", "desires", "asprires"]
var developSyn = ["create", "design", "invent", "devise", "grow", "evolve", "expand"]


var sentence3 = `It will ${increaseSyn[Math.floor(Math.random()*increaseSyn.length)]} and continue oppression towards the LBGTQ+ community, ${preventSyn[Math.floor(Math.random()*preventSyn.length)]} students from ${learningSyn[Math.floor(Math.random()*learningSyn.length)]} about the world around them, and ${stopSyn[Math.floor(Math.random()*stopSyn.length)]} them from growing up in a world that ${strivesSyn[Math.floor(Math.random()*strivesSyn.length)]} to ${developSyn[Math.floor(Math.random()*developSyn.length)]} and innovate`
// Sentence 3 is done lets goooooooooo

//It will also make it mandatory for schools to call children's parents who may not support their identity, putting them at extreme risk. 
var alsoSyn = ["likewise", "futhermore"]
var mandatorySyn = ["compulsory", "obligatory", "required"]
var callSyn = ["reach", "contact"]
var puttingSyn = ["placing", "setting", "positioning"]
var extremeSyn = ["unnecessay", "excessive", "disproportionate", "severe", "intense", "drastic"]
var riskSyn = ["danger", "hazard", "trouble"]


var sentence4 = `It will ${alsoSyn[Math.floor(Math.random()*alsoSyn.length)]} make it ${mandatorySyn[Math.floor(Math.random()*mandatorySyn.length)]} for schools to ${callSyn[Math.floor(Math.random()*callSyn.length)]} children's parents who may not support their identity, ${puttingSyn[Math.floor(Math.random()*puttingSyn.length)]} them at ${extremeSyn[Math.floor(Math.random()*extremeSyn.length)]} ${riskSyn[Math.floor(Math.random()*riskSyn.length)]}`

//#almost done


// This law will kill children, and it is in your hands.

var childrenSyn = ["kids", "minors"]

var sentence5 = `This law will kill ${childrenSyn[Math.floor(Math.random()*childrenSyn.length)]}, and it is in your hands`

// shes almost #there

// If you genuinely care about the safety of children as you claim you do, vote against SB 1834 and HB 1557 and protect them. 

var genuinelySyn = ["actually", "absolutely", "honestly", "indeed"]
var safetySyn = ["security"]
var childrenSyn = ["kids", "minors"]
var claim = ["swear", "declare", "assert", "proclaim", "alledge"]
var protectSyn = ["save", "guard"]

var sentence6 = `If you ${genuinelySyn[Math.floor(Math.random()*genuinelySyn.length)]} care about the ${safetySyn[Math.floor(Math.random()*safetySyn.length)]} of ${childrenSyn[Math.floor(Math.random()*childrenSyn.length)]} as you ${claim[Math.floor(Math.random()*claim.length)]} you do, vote against SB 1834 and HB 1557 and ${protectSyn[Math.floor(Math.random()*protectSyn.length)]} them`

// eeeeee shes so close



//We stand for truth and speak up for solvency. 
var westandSyn = ["We protest", "We promote", "We stand by", "We support"]
var speakupfor = ["demand", "encourage", "hope for", "applaud for", "push for"]

var sentence7 = `${westandSyn[Math.floor(Math.random()*westandSyn.length)]} for truth and ${speakupfor[Math.floor(Math.random()*speakupfor.length)]} solvency`


//For the US and the rest of the world, prove your stand on the right side of history. 

var proveSyn = ["confirm", "demonstrate", "verify", "assert"]

var sentence8 = `For the US and the rest of the world, ${proveSyn[Math.floor(Math.random()*proveSyn.length)]} your stand on the right side of history`

  
  
  /// stuff for the emails hehe ///
  var fullLetter2 = `${sentence1}. ${sentence2}. ${sentence3}. ${sentence4}. ${sentence5}. ${sentence6}. ${sentence7}. ${sentence8}.`
    var commonAppEmails = [
    "governorron.desantis@eog.myflorida.com", "Joe.Harding@myfloridahouse.gov", "baxley.dennis.web@flsenate.gov","albritton.ben.web@flsenate.gov", "boyd.jim.web@flsenate.gov", "bradley.jennifer.web@flsenate.gov", "brandes.jeff.web@flsenate.gov", "brodeur.jason.web@flsenate.gov", "broxson.doug.web@flsenate.gov", "burgess.danny.web@flsenate.gov", "diaz.manny.web@flsenate.gov","gainer.george.web@flsenate.gov","garcia.ileana.web@flsenate.gov","gruters.joe.web@flsenate.gov","Harrell.Gayle.web@flsenate.gov","Hooper.Ed.web@flsenate.gov","hutson.travis.web@flsenate.gov","mayfield.debbie.web@flsenate.gov","passidomo.kathleen.web@flsenate.gov","perry.keith.web@flsenate.gov","rodrigues.ray.web@flsenate.gov","rodriguez.anamaria.web@flsenate.gov","simpson.wilton.web@flsenate.gov","stargel.kelli.web@flsenate.gov","wright.tom.web@flsenate.gov"]
    var caEmails = commonAppEmails.join(",")
  var emailLetter2 = encodeURIComponent(fullLetter2.replace("The College Board", "The Common Application"))
  var emailLink2=`mailto:?bcc=${caEmails}&subject=stop+asian&body=${emailLetter2}`
  $('#commonAppEmails').attr("href", emailLink2) 
  
})

