describe("MailModel", function () {
    it("shouldn't return mail contained in filter", function () {
        MailModel.filter().forEach(function(mail){
            MailModel.rules.forEach(function(rule){
                expect(mail.subject.indexOf(rule.subject)).toBe(-1);
                expect(mail.from.indexOf(rule.from)).toBe(-1);
            })
        });
    });

});
