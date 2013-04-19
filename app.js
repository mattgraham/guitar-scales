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
			notes[12] = 'H';

		var majorScale = new Array();
			majorScale[1] = 2;
			majorScale[2] = 2;
			majorScale[3] = 1;
			majorScale[4] = 2;
			majorScale[5] = 2;
			majorScale[6] = 2;

		var minorScale = new Array();
			minorScale[1] = 2;
			minorScale[2] = 1;
			minorScale[3] = 2;
			minorScale[4] = 2;
			minorScale[5] = 1;
			minorScale[6] = 2;

		var melodicMinorScale = new Array();
			melodicMinorScale[1] = 2;
			melodicMinorScale[2] = 1;
			melodicMinorScale[3] = 2;
			melodicMinorScale[4] = 2;
			melodicMinorScale[5] = 2;
			melodicMinorScale[6] = 2;

		var harmonicMinorScale = new Array();
			harmonicMinorScale[1] = 2;
			harmonicMinorScale[2] = 1;
			harmonicMinorScale[3] = 2;
			harmonicMinorScale[4] = 2;
			harmonicMinorScale[5] = 1;
			harmonicMinorScale[6] = 3;


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
			$('td a').removeClass("badge-success").removeClass("badge-info").css("opacity", 0.6)
			var note = $(this).data("note");
			localStorage.setItem("note", note);
			$('#select-note').val(note);

			$('a[data-note="'+note+'"]').addClass("badge-success").css("opacity", 1);

			var selectScale = parseInt($('#select-scale').val());
			localStorage.setItem("scale", selectScale);

			var scale = new Array();
			switch(selectScale) {
				case 2: scale = minorScale; break;
				case 3: scale = melodicMinorScale; break;
				case 4: scale = harmonicMinorScale; break;
				case 5: scale = majorPentatonicScale; break;
				case 6: scale = minorPentatonicScale; break;
				case 7: scale = bluesScale; break;
				default: scale = majorScale;
			}
			// console.log(selectScale);
			$('#scaleName').text(notes[note]+" "+$('#select-scale option:selected').text());

			
			var scaleNote = note;
			for(i=0;i<scale.length;i++) {
				scaleNote = scaleNote+scale[i+1];
				if(scaleNote>12) scaleNote = scaleNote-12;
				$('a[data-note="'+scaleNote+'"]').addClass("badge-info").css("opacity", 1);
				
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

});