$(function(){
		var notes = new Array();
			notes[1] = 'C';
			notes[2] = 'C#';
			notes[3] = 'D';
			notes[4] = 'D#';
			notes[5] = 'E';
			notes[6] = 'F';
			notes[7] = 'F#';
			notes[8] = 'G';
			notes[9] = 'G#';
			notes[10] = 'A';
			notes[11] = 'A#';
			notes[12] = 'B';

		var majorScale = new Array();
			majorScale[1] = 2;
			majorScale[2] = 2;
			majorScale[3] = 1;
			majorScale[4] = 2;
			majorScale[5] = 2;
			majorScale[6] = 2;
			var majorChords = new Array();
				majorChords[0] = "maj";
				majorChords[1] = "min";
				majorChords[2] = "min";
				majorChords[3] = "maj";
				majorChords[4] = "maj";
				majorChords[5] = "min";
				majorChords[6] = "dim";
			var majorChords7 = new Array();
				majorChords7[0] = "maj7";
				majorChords7[1] = "min7";
				majorChords7[2] = "min7";
				majorChords7[3] = "maj7";
				majorChords7[4] = "maj7";
				majorChords7[5] = "min7";
				majorChords7[6] = "m7b5";	

		var minorScale = new Array();
			minorScale[1] = 2;
			minorScale[2] = 1;
			minorScale[3] = 2;
			minorScale[4] = 2;
			minorScale[5] = 1;
			minorScale[6] = 2;
			var minorChords = new Array();
				minorChords[0] = "min";
				minorChords[1] = "dim";
				minorChords[2] = "maj";
				minorChords[3] = "min";
				minorChords[4] = "min";
				minorChords[5] = "maj";
				minorChords[6] = "maj";
			var minorChords7 = new Array();
				minorChords7[0] = "min7";
				minorChords7[1] = "m7b5";
				minorChords7[2] = "maj7";
				minorChords7[3] = "min7";
				minorChords7[4] = "min7";
				minorChords7[5] = "maj7";
				minorChords7[6] = "maj7";

		var melodicMinorScale = new Array();
			melodicMinorScale[1] = 2;
			melodicMinorScale[2] = 1;
			melodicMinorScale[3] = 2;
			melodicMinorScale[4] = 2;
			melodicMinorScale[5] = 2;
			melodicMinorScale[6] = 2;
			var melodicMinorChords = new Array();
				melodicMinorChords[0] = "min";
				melodicMinorChords[1] = "min";
				melodicMinorChords[2] = "aug";
				melodicMinorChords[3] = "maj";
				melodicMinorChords[4] = "maj";
				melodicMinorChords[5] = "dim";
				melodicMinorChords[6] = "dim";
			var melodicMinorChords7 = new Array();
				melodicMinorChords7[0] = "min/maj7";
				melodicMinorChords7[1] = "min7";
				melodicMinorChords7[2] = "maj7#5";
				melodicMinorChords7[3] = "dom7";
				melodicMinorChords7[4] = "dom7";
				melodicMinorChords7[5] = "m7b5";
				melodicMinorChords7[6] = "m7b5";

		var harmonicMinorScale = new Array();
			harmonicMinorScale[1] = 2;
			harmonicMinorScale[2] = 1;
			harmonicMinorScale[3] = 2;
			harmonicMinorScale[4] = 2;
			harmonicMinorScale[5] = 1;
			harmonicMinorScale[6] = 3;
			var harmonicMinorChords = new Array();
				harmonicMinorChords[0] = "min";
				harmonicMinorChords[1] = "dim";
				harmonicMinorChords[2] = "aug";
				harmonicMinorChords[3] = "min";
				harmonicMinorChords[4] = "maj";
				harmonicMinorChords[5] = "maj";
				harmonicMinorChords[6] = "dim";
			var harmonicMinorChords7 = new Array();
				harmonicMinorChords7[0] = "min/maj7";
				harmonicMinorChords7[1] = "m7b5";
				harmonicMinorChords7[2] = "maj7#5";
				harmonicMinorChords7[3] = "min7";
				harmonicMinorChords7[4] = "dom7";
				harmonicMinorChords7[5] = "maj7";
				harmonicMinorChords7[6] = "dim7";


		var majorPentatonicScale = new Array();
			majorPentatonicScale[1] = 2;
			majorPentatonicScale[2] = 2;
			majorPentatonicScale[3] = 3;
			majorPentatonicScale[4] = 2;

		var minorPentatonicScale = new Array();
			minorPentatonicScale[1] = 3;
			minorPentatonicScale[2] = 2;
			minorPentatonicScale[3] = 2;
			minorPentatonicScale[4] = 3;

		var bluesScale = new Array();
			bluesScale[1] = 3;
			bluesScale[2] = 2;
			bluesScale[3] = 1;
			bluesScale[4] = 1;
			bluesScale[5] = 3;


		$('td a').click(function(){
			$('td a').removeClass("badge-success").removeClass("badge-info").css("opacity", 0.3)
			var note = $(this).data("note");
			localStorage.setItem("note", note);
			$('#select-note').val(note);

			$('a[data-note="'+note+'"]').addClass("badge-success").css("opacity", 0.6);

			var selectScale = parseInt($('#select-scale').val());
			localStorage.setItem("scale", selectScale);
			var showChords = true;

			var scale = new Array();
			switch(selectScale) {
				case 2: scale = minorScale; scaleChords = minorChords; scaleChords7 = minorChords7; break;
				case 3: scale = melodicMinorScale; scaleChords = melodicMinorChords; scaleChords7 = melodicMinorChords7; break;
				case 4: scale = harmonicMinorScale; scaleChords = harmonicMinorChords; scaleChords7 = harmonicMinorChords7; break;
				case 5: scale = majorPentatonicScale; showChords = false; break;
				case 6: scale = minorPentatonicScale; showChords = false; break;
				case 7: scale = bluesScale; showChords = false; break;
				default: scale = majorScale; scaleChords = majorChords; scaleChords7 = majorChords7;
			}
			// console.log(selectScale);
			$('#scaleName').text(notes[note]+" "+$('#select-scale option:selected').text());

			if(showChords) $('#chords').show();
			else $('#chords').hide();

			
			var scaleNote = note;

				if(showChords) {
					$('#chords table tr:eq(0) td:eq(0)').text(notes[scaleNote]+scaleChords[0]);
					$('#chords table tr:eq(1) td:eq(0)').text(notes[scaleNote]+scaleChords7[0]);
				}

			for(i=0;i<scale.length;i++) {
				scaleNote = scaleNote+scale[i+1];
				if(scaleNote>12) scaleNote = scaleNote-12;

				$('a[data-note="'+scaleNote+'"]').addClass("badge-info").css("opacity", 0.6);

				if(showChords) {
					$('#chords table tr:eq(0) td:eq('+(i+1)+')').text(notes[scaleNote]+scaleChords[i+1]);
					$('#chords table tr:eq(1) td:eq('+(i+1)+')').text(notes[scaleNote]+scaleChords7[i+1]);
				}
				
			}

			// launchpad light
			$('#launchpad span').removeClass("selected-key").removeClass("selected");
			$('#launchpad .badge-success').parent().addClass("selected-key");
			$('#launchpad .badge-info').parent().addClass("selected");

			return false;
		});

		var default_note = localStorage.getItem("note");
		if(default_note=="" || default_note==null) default_note = 1;

		var default_scale = localStorage.getItem("scale");
		// console.log(default_scale);
		if(default_scale=="" || default_scale==null) default_scale = 1;
		$('#select-scale').val(default_scale);

		var default_octave = localStorage.getItem("octave");
		if(default_octave=="" || default_octave==null) default_octave = "none";
		$('#select-octave').val(default_octave);		
		

		$('a[data-note="'+default_note+'"]:first').click();

		$('#select-scale').change(function(){
			$('.badge-success:first').click();
		});

		$('#select-note').change(function(){
			$('a[data-note="'+$(this).val()+'"]:first').click();
		});

		$('#select-octave').change(function(){
			var selectedOctave = $(this).val();
			localStorage.setItem("octave", selectedOctave);
			$('#launchpad td span').removeClass("selected-octave");

			if(selectedOctave!="") {
				$('#launchpad td a[data-octave="'+selectedOctave+'"]').parent().addClass("selected-octave");
			}
		});
		$('#select-octave').change();


var i = 0;
$('#fretboard tr:first td').each(function(){
	var koef = 0.1;

	if(i>8) koef = 0.15;

	if(i>0) {
		$('#fretboard tr:first td:eq('+i+')').css({"width" : (6.5-(i*koef))+"%"});
	}
// console.log(i);
i++;
});
});