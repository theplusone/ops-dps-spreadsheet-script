var e = ["Muttadiles (small)", "Muttadiles (big)",
         "Great Olm (head)", "Skeletal mystics"]

var p1 = [["Toxic blowpipe"],
          ["*rapid* *ranged*"],
          [""],
          ["Dragon dart"],
          ["Void knight helm"],
          ["Ava's assembler"],
          ["Necklace of anguish"],
          ["Elite void top"],
          ["Elite void robe"],
          [""],
          ["Void knight gloves"],
          ["Pegasian boots"],
          [""]];

var p2 = [["Scythe of Vitur"],
          ["*aggressive* *slash*"],
          [""],
          [""],
          ["Neitiznot faceguard"],
          ["Infernal cape"],
          ["Amulet of torture"],
          ["Bandos chestplate"],
          ["Bandos tassets"],
          [""],
          ["Ferocious gloves"],
          ["Primordial boots"],
          ["Berserker (i)"]];

var p = [[p1, "Void ranged"],
         [p2, "Bandos scythe"]]

function doBulkCalcs() {
  for (var i = 0; i < e.length; i++) {
    for (var ii = 0; ii < p.length; ii++) {
      var enemy = e[i];
      var player = p[ii][0];
      var name = p[ii][1];
      replaceCells(enemy, player, name);
    }
  }
}

function replaceCells(enemy, player, name) {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange("J5:J5").setValue(enemy);
  sheet.getRange("E19:E31").setValues(player);
  var dps = sheet.getRange("M14").getValue();
  Logger.log("%s | %s | %s", enemy, name, dps);
}
