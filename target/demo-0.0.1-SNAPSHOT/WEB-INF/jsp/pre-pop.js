var myPhone = "" + GetFlowVariable(AF.Lead.v.PhoneCode) + GetFlowVariable(AF.Lead.v.PhonePrefix) + GetFlowVariable(AF.Lead.v.PhoneSuffix);
    var tempgender = GetFlowVariable((AF.Lead.v.Gender == "True" ? "M" : (AF.Lead.v.Gender == "False" ? "F" : "")));
    var extra= "&firstname=" + GetFlowVariable(AF.Lead.v.FirstName) +
                "&lastname=" + GetFlowVariable(AF.Lead.v.LastName) +
                "&email=" + GetFlowVariable(AF.Lead.v.Email) +
                "&address=" + GetFlowVariable(AF.Lead.v.Address1) +
                "&city=" + GetFlowVariable(AF.Lead.v.City) +
                "&state=" + GetFlowVariable(AF.Lead.v.State) +
                "&zip=" + GetFlowVariable(AF.Lead.v.ZipPost) +
                "&gender=" + tempgender +
                "&phone=" + myPhone +
                "&dob-d=" + GetFlowVariable(AF.Lead.v.DobDay) +
                "&dob-m=" + GetFlowVariable(AF.Lead.v.DobMonth) +
                "&dob-y=" + GetFlowVariable(AF.Lead.v.DobYear);
        
        