<?php

			$notes[1] = 'C';
			$notes[2] = 'C#';
			$notes[3] = 'D';
			$notes[4] = 'D#';
			$notes[5] = 'E';
			$notes[6] = 'F';
			$notes[7] = 'F#';
			$notes[8] = 'G';
			$notes[9] = 'G#';
			$notes[10] = 'A';
			$notes[11] = 'A#';
			$notes[12] = 'H';

for($i=1;$i<7;$i++) {

	echo "\n\t<tr>";

	$zero = true;

	switch($i) {
		case 1: $start=5; break;
		case 2: $start=12; break;
		case 3: $start=8; break;
		case 4: $start=3; break;
		case 5: $start=10; break;
		case 6: $start=5; break;
	}

		for($y=1;$y<26;$y++) {
			echo "\n\t\t<td".($zero ? ' class="zero"' : '')."><span><a href=\"javascript:;\" class=\"badge\" data-note=\"$start\">".$notes[$start]."</a></span></td>";

			$start++;
			if($start>12) $start=1;

			$zero=false;
		}


	echo "\n\t</tr>";
}