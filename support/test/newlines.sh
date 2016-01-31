#!/bin/bash

###
# Check for too many (> 2) subsequent empty lines
###

if [ -z $1 ]; then
	echo No files to check
	exit 1
fi

ERRORS=0
for FILE in $@
do
	CURLINE=0
	PREVLINE=0

	while read -r LINE
	do
		CURLINE=$[$CURLINE+1];
		
		if [ -z "${LINE}${PREVLINE}" ]; then
			echo "More than 2 newlines: file ${FILE}, line ${CURLINE}"
			ERRORS=$[$ERRORS+1];
		fi;
		PREVLINE=${LINE};

	done < "${FILE}"
done;

exit ${ERRORS}
