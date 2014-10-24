 UsersGenerator = function(){
     var givennames= ["Alice","Lucas","Maja","Elias","Ella","Oscar","Emma","William","Elsa","Hugo","Alva","Alexander","Julia","Oliver","Linnea","Viktor","Wilma","Erik","Ebba","Axel","Molly","Filip","Nellie","Emil","Klara","Isak","Agnes","Leo","Ida","Liam","Elin","Theo","Olivia","Anton","Emilia","Melvin","Isabelle","Albin","Amanda","Gustav","Saga","Max","Moa","Ludvig","Ellen","Arvid","Alma","Edvin","Matilda","Vincent","Hanna","Viggo","Nova","Alvin","Sara","Wilmer","Alicia","Adam","Felicia","Noah","Stella","Elliot","Tuva","Simon","Astrid","Jonathan","Isabella","Kevin","Meja","Olle","Selma","Benjamin","Thea","Linus","Elvira","Carl","Lilly","Alfred","Lovisa","Rasmus","Tindra","Gabriel","Lova","Charlie","Nora","Jacob","Sofia","Theodor","Ester","Nils","Nathalie","Leon","Vera","Felix","Tilde","Sebastian","Tyra","Noel","Emelie","Casper","Filippa","Malte","Freja","Sixten","Signe","Ville","Tilda","David","Siri","Melker","Lea","Joel","Stina","Hampus","Cornelia","Neo","Inez","Adrian","Edith","Samuel","Linn","Love","Mira","Milo","Jasmine","Josef","Liv","Jack","Leia","Mohammed","Emmy","Wilhelm","Frida","Alex","Lisa","Daniel","Ellie","Tim","Josefin","Valter","Svea","Sigge","Rebecka","Vilgot","Evelina","Robin","Ronja","Marcus","Kajsa","Vidar","Anna","August","Joline","Milton","Elina","Måns","Elise","Hannes","Märta","Maximilian","Lina","Loke","Hilda","Harry","Iris","Elis","Ingrid","John","Melissa","Aron","Livia","Hjalmar","Vilda","Otto","My","Elton","Sofie","Mio","Malva","Fabian","Nicole","Eddie","Victoria","Sam","Fanny","Svante","Greta","Dante","Hedda","Ali","Alexandra","Johannes","Maria","Mattias","Rut","Jesper","Miranda","Dennis","Johanna","Ruben"];


	var surnames = ["Abrahamsson","Adamsson","Adolfsson","Ahlberg","Ahlén","Ahlgren","Ahlin","Ahlqvist","Ahlstrand","Ahlström","Ahl","Albertsson","Albinsson","Alexandersson","Alfredsson","Algotsson","Almén","Almgren","Almqvist","Almström","Alm","Anderberg","Andersen","Andersson","Andreasson","Andrén","André","Antonsson","Appelgren","Appelqvist","Arnesson","Aronsson","Arvidsson","Ask","Asplund","Asp","Assarsson","Augustsson","Axelsson","Axén","Backlund","Backman","Backström","Back","Bark","Beckman","Bengtsson","Benjaminsson","Bergdahl","Bergendahl","Berger","Berggren","Bergh","Bergkvist","Berglind","Berglin","Berglund","Bergman","Bergmark","Bergquist","Bergqvist","Bergstedt","Bergsten","Bergstrand","Bergström","Bergvall","Berg","Berlin","Berndtsson","Bernhardsson","Berntsson","Bertilsson","Birgersson","Bjurström","Björck","Björklund","Björkman","Björkqvist","Björk","Björling","Björnberg","Björnsson","Björn","Bladh","Blad","Blixt","Blomberg","Blomdahl","Blomgren","Blomkvist","Blomquist","Blomqvist","Blom","Boberg","Bodén","Bodin","Bogren","Bohlin","Bohman","Bolin","Boman","Bondesson","Borgström","Borg","Boström","Brandt","Bratt","Brink","Broberg","Brodén","Brodin","Brolin","Broman","Brorsson","Broström","Bruhn","Brundin","Bryngelsson","Brändström","Brännström","Burman","Burström","Bylund","Byström","Bäcklund","Bäckman","Bäckström","Bäck","Börjesson","Carlberg","Carlén","Carlson","Carlsson","Carlström","Cederberg","Cedergren","Cederholm","Cederlund","Ceder","Christensen","Christensson","Christiansson","Claesson","Classon","Collin","Dahlberg","Dahlén","Dahlgren","Dahlin","Dahlman","Dahlqvist","Dahlström","Dahl","Damberg","Danielsson","Davidsson","Degerman","De","Edberg","Edgren","Edholm","Edin","Edlund","Edman","Edström","Edvardsson","Edvinsson","Ehn","Einarsson","Ekberg","Ekblad","Ekblom","Ekdahl","Ekelund","Ekholm","Eklund","Eklöf","Ekman","Ekstedt","Ekstrand","Ekström","Ekvall","Ek","Elfström","Elfving","Elg","Eliasson","Elofsson","Emanuelsson","Emilsson","Enberg","Engberg","Engblom","Engdahl","Englund","Engman","Engqvist","Engstrand","Engström","Engvall","Eng","Enqvist","Enström","Ericson","Ericsson","Eriksson","Erlandsson","Ersson","Esbjörnsson","Eskilsson","Evertsson","Fagerberg","Fagerlund","Fagerström","Fahlén","Fahlgren","Fahlström","Falck","Falk","Fast","Ferm","Fernström","Filipsson","Flink","Flodin","Fogelberg","Folkesson","Forsberg","Forsell","Forsgren","Forslund","Forsman","Forsmark","Forsström","Forss","Fors","Frank","Fransén","Fransson","Franzén","Fredin","Fredlund","Fredriksson","Freij","Friberg","Frick","Fridell","Fridén","Fridh","Fridlund","Frid","Friman","Frisk","Fritz","From","Fröberg","Fröjd","Fält","Gabrielsson","Gerdin","Gidlund","Gillberg","Glad","Glans","Gradin","Grahn","Granath","Granat","Granberg","Grankvist","Granlund","Granqvist","Granström","Gran","Green","Gren","Grip","Grundström","Grönberg","Grönlund","Grönqvist","Grönvall","Gudmundsson","Gullberg","Gummesson","Gunnarsson","Gustafsson","Gustavsson","Göransson","Haag","Hagberg","Hagelin","Haglund","Hagman","Hagström","Hallberg","Halldén","Halldin","Hallén","Hallgren","Hallin","Hallman","Hallqvist","Hallström","Hall","Halvarsson","Hamberg","Hammarberg","Hammarlund","Hammarström","Hammar","Hamrin","Hansen","Hansson","Haraldsson","Harrysson","Hedberg","Hedblom","Hedén","Hedin","Hedlund","Hedman","Hedqvist","Hedström","Hedvall","Hed","Helander","Helgesson","Helin","Hellberg","Hellgren","Hellman","Hellqvist","Hellsten","Hellstrand","Hellström","Helmersson","Hemmingsson","Henningsson","Henning","Henriksson","Hermansson","Hilmersson","Hjalmarsson","Hjelm","Hjerpe","Hjorth","Hjort","Holgersson","Holmberg","Holmén","Holmer","Holmgren","Holmkvist","Holmlund","Holmquist","Holmqvist","Holmstedt","Holmström","Holm","Holst","Hugosson","Hultberg","Hultén","Hultgren","Hultin","Hultman","Hultqvist","Hult","Hurtig","Håkansson","Hård","Hägglund","Häggström","Hägg","Hällgren","Hällström","Häll","Högberg","Höglund","Högman","Högström","Hörberg","Ingemarsson","Ingvarsson","Isaksson","Isberg","Israelsson","Ivarsson","Jacobsson","Jakobsson","Jansson","Jarl","Jensen","Jeppsson","Jernberg","Joelsson","Johannesson","Johannisson","Johansen","Johansson","Johnson","Johnsson","Jonasson","Jonsson","Josefsson","Juhlin","Julin","Jönsson","Jörgensen","Kallin","Karlberg","Karlén","Karlsson","Karlström","Kempe","Kihlberg","Kihlström","Kjellberg","Kjellgren","Kjellin","Kjellman","Kjellström","Kjell","Klaesson","Klang","Klasson","Klingberg","Kling","Klint","Knutsson","Konradsson","Kraft","Krantz","Kristensson","Kristiansson","Kristoffersson","Kron","Krook","Kroon","Kruse","Kullberg","Kvarnström","Kvist","Käck","Källberg","Källgren","Källman","Källström","Käll","Kämpe","Köhler","Lagergren","Lagerqvist","Lagerström","Lager","Landberg","Landén","Landgren","Landin","Landström","Lans","Lantz","Larsen","Larsson","Leandersson","Leander","Ledin","Leijon","Lejon","Lennartsson","Levin","Lidberg","Lidén","Lidman","Lidström","Lif","Lilja","Liljedahl","Liljegren","Liljekvist","Lindahl","Lindberg","Lindblad","Lindblom","Lindbom","Lindborg","Lindbäck","Lindeberg","Lindell","Lindén","Linderoth","Linder","Linde","Lindfors","Lindgren","Lindholm","Lindh","Lindkvist","Lindman","Lindmark","Lindquist","Lindqvist","Lindroth","Lindskog","Lindstedt","Lindstrand","Lindström","Lindvall","Lind","Ling","Ljungberg","Ljungdahl","Ljunggren","Ljungkvist","Ljungqvist","Ljungström","Ljung","Lorentzon","Lovén","Ludvigsson","Lundahl","Lundberg","Lundblad","Lundborg","Lundbäck","Lundell","Lundén","Lundgren","Lundholm","Lundh","Lundin","Lundkvist","Lundmark","Lundquist","Lundqvist","Lundstedt","Lundström","Lundvall","Lund","Långström","Lång","Löfberg","Löfdahl","Löfgren","Löfqvist","Löfstedt","Löfstrand","Löfström","Löf","Lönnberg","Lönnqvist","Lönn","Lövgren","Lööf","Magnusson","Malmberg","Malmborg","Malmgren","Malmkvist","Malmqvist","Malmros","Malmsten","Malmström","Malm","Marklund","Markström","Markusson","Martinsson","Matsson","Mattiasson","Mattisson","Mattsson","Medin","Meijer","Melander","Melin","Mellberg","Mellgren","Mikaelsson","Moberg","Modig","Modin","Molander","Molin","Morén","Morin","Mossberg","Müller","Månsson","Mårtensson","Möller","Mörk","Nelson","Nielsen","Niemi","Niklasson","Nilsson","Norberg","Nordahl","Nordberg","Nordell","Nordén","Nordgren","Nordh","Nordin","Nordkvist","Nordlander","Nordling","Nordlund","Nordmark","Nordquist","Nordqvist","Nordstrand","Nordström","Nordvall","Nord","Norell","Norén","Norgren","Norin","Norlander","Norling","Norlin","Norman","Norrby","Norrman","Norström","Nyberg","Nygren","Nyholm","Nykvist","Nylander","Nylén","Nylund","Nyman","Nyqvist","Nyrén","Nystedt","Nyström","Näslund","Näsman","Näsström","Ohlsson","Olander","Olausson","Olin","Olofsson","Olovsson","Olsen","Olsén","Olsson","Oscarsson","Oskarsson","Ottosson","Palmér","Palmgren","Palmqvist","Palm","Paulsson","Pedersen","Pehrsson","Persson","Petersen","Peterson","Petersson","Pettersson","Pihl","Pålsson","Qvarnström","Qvist","Ragnarsson","Rahm","Ramberg","Ramström","Rapp","Rask","Rasmussen","Rasmusson","Rehn","Reinholdsson","Renberg","Renström","Rickardsson","Ringdahl","Ringström","Ring","Risberg","Robertsson","Rodin","Roos","Rosander","Rosberg","Rosell","Rosenberg","Rosendahl","Rosengren","Rosenkvist","Rosenqvist","Rosén","Roslund","Rosvall","Ros","Roth","Rundberg","Rundgren","Rundqvist","Rutgersson","Ryberg","Rydberg","Rydell","Rydén","Rydström","Ryd","Rylander","Rönnberg","Rönnbäck","Rönnqvist","Rönn","Sahlberg","Sahlén","Sahlin","Sahlström","Salomonsson","Samuelsson","Sandahl","Sandberg","Sandell","Sandén","Sander","Sandgren","Sandin","Sandqvist","Sandström","Sand","Schmidt","Schröder","Schultz","Schön","Seger","Selander","Selberg","Selin","Sigfridsson","Simonsson","Sjunnesson","Sjöberg","Sjöblom","Sjödahl","Sjödin","Sjögren","Sjöholm","Sjökvist","Sjölander","Sjölin","Sjölund","Sjöqvist","Sjöstedt","Sjösten","Sjöstrand","Sjöström","Sjöö","Skoglund","Skog","Skoog","Sköld","Smedberg","Smith","Sonesson","Spångberg","Staaf","Stark","Steen","Stefansson","Stenberg","Stenlund","Stenman","Stenmark","Stenqvist","Stensson","Stenström","Stenvall","Sten","Sterner","Stolpe","Stoltz","Stolt","Storm","Strandberg","Strand","Stridh","Strid","Strömberg","Strömbäck","Strömgren","Strömqvist","Ström","Sturesson","Ståhl","Stålberg","Stålnacke","Stål","Sundberg","Sundelin","Sundell","Sundén","Sundgren","Sundin","Sundkvist","Sundman","Sundquist","Sundqvist","Sundström","Sundvall","Sund","Sunesson","Svahn","Svanberg","Svanström","Svantesson","Svan","Svedberg","Svedin","Svedlund","Svenningsson","Svensk","Svensson","Svärd","Säfström","Säll","Söderberg","Söderblom","Södergren","Söderholm","Söderkvist","Söderlind","Söderlund","Söderman","Söderqvist","Söderström","Söder","Sörensen","Sörensson","Sörman","Tapper","Tell","Thelander","Thelin","Thomasson","Thorell","Thorén","Thorsell","Thorsson","Thor","Thulin","Thunberg","Thuresson","Thörn","Tillberg","Tillman","Tjernström","Tornberg","Torstensson","Trulsson","Trygg","Tufvesson","Turesson","Tuvesson","Törnberg","Törnblom","Törngren","Törnkvist","Törnqvist","Ulander","Vahlberg","Valfridsson","Vallgren","Vallin","Vall","Van","Vedin","Velander","Vennberg","Vernersson","Vestberg","Vesterberg","Vestergren","Vesterlund","Vestin","Vestling","Vestlund","Vestman","Viberg","Vidén","Vigren","Vikberg","Viklund","Vikman","Vikström","Viktorsson","Vik","Vilhelmsson","Vinberg","Von","Wahlberg","Wahlgren","Wahlqvist","Wahlström","Wallberg","Wallén","Wallgren","Wallin","Wallman","Wallström","Wall","Wedin","Welander","Welin","Wendel","Wennberg","Wennerberg","Wennerström","Wennström","Werner","Wessman","Westberg","Westerberg","Westergren","Westerlund","Wester","Westin","Westling","Westlund","Westman","Wiberg","Wickman","Wickström","Widell","Widén","Widlund","Wihlborg","Wiklund","Wikman","Wikström","Wik","Wilhelmsson","Wiman","Winberg","Wirén","Zachrisson","Zackrisson","Zakrisson","Zander","Zetterberg","Zetterlund","Zetterström","Åberg","Ågren","Åhlander","Åhlén","Åhlin","Åhman","Åhs","Åkerberg","Åkerblom","Åkerlind","Åkerlund","Åkerman","Åkerström","Åkesson","Ålander","Ålund","Åman","Åsberg","Åslund","Åstrand","Åström","Öberg","Ödman","Ögren","Öhlin","Öhlund","Öhman","Öhrn","Ölund","Öman","Öqvist","Örn","Östberg","Österberg","Östergren","Österlund","Österman","Öster","Östling","Östlund","Östman","Öström","Öst"];

  var domains = ["edu.uu.se","math.uu.se", "hist.uu.se", "uadm.uu.se", "ull.uu.se"];
//--
 function validatePNum(sPNum)
{
  sPNum = "19" + sPNum.replace("-", "");
  var numbers = sPNum.match(/^(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)$/);
  var checkSum = 0;

  var d = new Date();
  if (!isDate(sPNum.substring(0,4),sPNum.substring(4,6),sPNum.substring(6,8))) {
    alert("Datumet " + sPNum.substring(0,8) + " är inte korrekt.");
    return false;
  }

  if (numbers == null) { return false; }

  var n;
  for (var i = 3; i <= 12; i++)
  {
    n=parseInt(numbers[i]);
    if (i % 2 == 0) {
      checkSum+=n;
    } else {
      checkSum+=(n*2)%9+Math.floor(n/9)*9
    }
  }

  if (checkSum%10==0) { return true;}
  return false;
}

function getYear(y) { return (y < 1000) ? y + 1900 : y; }

function isDate(year, month, day)
{
  month = month - 1; // 0-11 in JavaScript
  var tmpDate = new Date(year,month,day);
  if ( (getYear(tmpDate.getYear()) == year) &&
  (month == tmpDate.getMonth()) &&
  (day == tmpDate.getDate()) )
    return true;
  else
    return false;
}

//--

 var startDate = new Date(1970, 0, 1);
 var endDate = new Date(1999, 12, 31);

 var replaceWithLowerASCII = function(s){
     return s.toLowerCase()
		   .replace("å", "a")
		   .replace("ä", "a")
		   .replace("ö", "o")
		   .replace("é", "e");
 };

 var padLeft0 = function(v,n){
     var zeros = "";
     for(var i = 0; i < n; i++){
         zeros += "0"; 
     }
     return (zeros + v).slice(-1*n);
 };

 var getRndIndex = function(n){
 	 return Math.floor((Math.random() * n));  
 };

 var getRndBirthNumber = function(idx){
     return padLeft0(Math.floor((Math.random() * 99)), 2) + padLeft0(idx, 1);
 };

 var getRndDate = function(){
     return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
 };

 var getControlNum = function(tn){
     var sum = 0;
     for(var i = 0; i < tn.length; i++){
         var n = parseInt(tn[i]);
	     if(i%2 == 0){
            sum += (n*2)%9 + Math.floor(n/9)*9;
         } else {
            sum += n;
         }
     }
	 return ((10-(sum%10))%10).toString();
 };

 var generatePNR = function(idx, retries){
     retries = retries || 0;
     var d = getRndDate();
	 var t = padLeft0(d.getFullYear().toString(), 2) + padLeft0(d.getMonth()+1, 2) + padLeft0(d.getDate(), 2);
     var n = getRndBirthNumber(idx);
     var c = getControlNum(t+""+n);
     var p = t + "-" + n + "" + c;
     // Verifying generated PNR
     // and retry if not valid
	 if (!validatePNum(p)) {
        if (retries > 0) {
           	console.info("not valid pnr, retrying", p, t , n ,c, retries);
            return generatePNR(idx, retries-1);
        }
       	console.info("not valid pnr, no more retries", p, t , n ,c);
	 }
	 return p;
 };

 var generateUID = function(g,s,p){
    return replaceWithLowerASCII((g.slice(0,3)+s).slice(0,5)+p.slice(7, 10));
 }

 var generateEMAIL = function(g,s){
    return replaceWithLowerASCII(g + "." + s + "@" + domains[getRndIndex(domains.length)]);
 }

//--

 var get = function(n){
     var users = [];
 	 for(var i = 0; i < n; i++){
   	     var idx = getRndIndex(givennames.length);
   	     var g = givennames[idx];
         var s = surnames[getRndIndex(surnames.length)];
         var p = generatePNR(idx, 1);
         var u = generateUID(g, s, p);
         var e = generateEMAIL(g,s);
         users.push({givenname: g,
                     surname: s,
                     pnr: p,
                     uid: u,
                     email: e});
	 }
 	 return users;
 };


 return {
     get:get,
 };
}();
