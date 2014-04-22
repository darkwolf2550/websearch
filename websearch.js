var exec = require('child_process').exec;
exports.action = function(data, callback, config, SARAH){

   if (!data.dictation){
    return callback({'tts': "Je ne comprends pas"});
  }
  var search = data.dictation;

  var rgxp = search.replace(/Sarah /i,"");
  var rgxp1 = rgxp.replace(/recherche /i,"");
  var rgxp2 = rgxp1.replace(/sur /i,"");
  var rgxp3 = rgxp2.replace(/internet /i,"");
  
  var answer = 'Voici le raisultat de votre recherche sur ' + rgxp3 ;
  var process = '%CD%/plugins/websearch/bin/search.vbs ' + rgxp3;
  exec(process)
	
  callback({'tts' : answer });
}