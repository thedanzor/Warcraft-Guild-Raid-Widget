#/bin/bash

if [ -z $1 ]; then
	echo No max line length specified
	exit 1
fi

if [ -z $2 ]; then
	echo No files to check
	exit 1
fi

# shift line length argument from command line
MAXLENGTH=$1
shift;

# use grep to determine line length and report
grep  -n ".\{$MAXLENGTH,\}" $@ | cut -d ':' -f 1,2 | sed s/\:/' line '/ |
	sed s/^/"Line has more than $MAXLENGTH characters: "/


# return exit code 0 ('all ok') if grep fails
# grep returned output, return exit code 1 ('error')
if [ ${PIPESTATUS[0]} -eq 0 ]; then
	exit 1
else
	exit 0
fi
