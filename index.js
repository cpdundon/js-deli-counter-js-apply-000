var katzDeli = [];

function takeANumber(line, name) {
  var l = line.length + 1;
  // line.push(name) - this come later
  
  return l
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."  
  }
  
  var rtn = "The line is currently:"
  
  line.forEach(function(e, idx) {
    rtn = rtn + " " + (idx + 1) + ". " + e + ","
  });
  
  var l = rtn.length
  
  return rtn.substring(0, l - 2)
} 