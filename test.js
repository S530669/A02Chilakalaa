QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test("Testing the function calculator", function(assert)
{
    
    assert.strictEqual(calculator(3,4,"+"),7, 'Testing the Operators');
    assert.strictEqual(calculator(-30,4,"+"),-26, 'Testing the Negative Numbers');
    assert.strictEqual(calculator(0,5,"/"),0, 'Testing the division');
    assert.strictEqual(calculator(-30,4,")"),"Invalid", 'If no operator is given');
    assert.throws(function () {calculator(null); }, /The given arguments is not a number/, 'Passing in null correctly raises an Error');
    assert.throws(function () {calculator(); }, /The given arguments is not a number/, 'Passing no arguments correctly raises an Error');
   // assert.throws(function () {calculator(-2,-4,'+'); },/The given numbers are negative/, 'Testing Negative Numbers');
    //assert.throws(function () {testing_credits(2,4,-5); },/The given numbers are negative/, 'Testing Negative and positive Numbers');
    
});