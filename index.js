var katzDeli = [];

function takeANumber(line, name) {
  var l = line.length + 1;
  // line.push(name) - this come later
  
  return l
}

function currentLine(line) {
  if line.length === 0 then {
    return ""  
  }
  
  var rtn = ""
  
  line.forEach(function(e, idx) {
    rtn = rtn + (idx + 1) + ". " + e 
  });
  return rtn
} 