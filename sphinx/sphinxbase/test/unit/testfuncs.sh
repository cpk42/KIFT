# Utility functions and parameters for regression tests

# Predefined directories you may need
<<<<<<< HEAD:sphinxbase/test/unit/testfuncs.sh
# Stupid broken CMU Facilities autoconf doesn't do /nfs/2017/c/ckrommen/Desktop/42-cadet/KIFT/sphinxbase
=======
# Stupid broken CMU Facilities autoconf doesn't do /Users/curtiskrommenhoek/Desktop/42-Cadets/KIFT/sphinxbase
>>>>>>> 153d6af012c6a773771088ee477ea675c672ab9d:sphinxbase/test/unit/testfuncs.sh
builddir=../"../.."
sourcedir=../"../.."
tests=$sourcedir/test

# Automatically report failures on exit
failures=""
trap "report_failures" 0

run_program() {
    program="$1"
    shift
    $builddir/libtool --mode=execute "$builddir/src/$program/$program" $@
}

pass() {
    title="$1"
    echo "$title PASSED"
}

fail() {
    title="$1"
    echo "$title FAILED"
    failures="$failures,$title"
}

assert() {
    title="$1"
    shift
    if $@ >/dev/null 2>&1; then
	pass "$title"
    else
	fail "$title"
    fi
}

compare_table() {
    title="$1"
    shift
    if perl "$tests/compare_table.pl" $@ | grep SUCCESS >/dev/null 2>&1; then
	pass "$title"
    else
	fail "$title"
    fi 
}

report_failures() {
    if test x"$failures" = x; then
	echo "All sub-tests passed"
	exit 0
    else
	echo "Sub-tests failed:$failures" | sed -e 's/,/\n/g'
	exit 1
    fi
}
