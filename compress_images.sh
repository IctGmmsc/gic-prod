

for i in $(find ./images -name '*.jpg' -o -name '*.jpeg' -o -name '*.png'); do
	fname=$(echo $i | rev | cut -d/ -f1 | rev)
	echo $i
	ffmpeg -hide_banner -i $i -compression_level 100 -y images/new_$fname
	ffmpeg -hide_banner -i images/new_$fname -map_metadata -1 -c:v copy -y $i
	rm images/new_$fname
done;
