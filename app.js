function compoundInterest(interestRate, initialPrincipalBalance, numberOfTimesInterestIsApplied, timePeriod){
    return initialPrincipalBalance * (1 + (interestRate/numberOfTimesInterestIsApplied) ** numberOfTimesInterestIsApplied * timePeriod);
}