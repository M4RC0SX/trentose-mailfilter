describe("MailModel", function () {
    it("shouldn't return mail contained in filter", function () {
        MailModel.filter().forEach(function(mail){
            MailModel.rules.forEach(function(rule){
                expect(mail.indexOf(rule)).toBe(-1);
            })
        });
    });

    it("should return all mail that don't contain rules", function () {
        var validMail=[];
        MailModel.messages.forEach(function(mail){
            var spam=false;
            MailModel.rules.forEach(function(rule){
                if(mail.indexOf(rule)>=0)spam=true;
            });
            if(!spam)validMail.push(mail);
        });
        expect(MailModel.filter()).toEqual(validMail);
    });

});
