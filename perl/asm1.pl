#!/usr/bin/perl
use warnings;
use strict;
while(<>){print "match found $_\n" if($_ =~ /    (add|sub|mul|div)/i);}
