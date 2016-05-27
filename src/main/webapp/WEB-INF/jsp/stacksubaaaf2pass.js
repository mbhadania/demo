 var subaff2pass = (pp != null && pp._subaff2pass != undefined ? pp._subaff2pass : 0);
        if (subaff2pass == "1") {
            mysubaff = GetFlowVariable(jFlowCfg.SubAff.split("_")[1]);
        }
        
        
        
        var subaff2pass = (pp != null && pp._subaff2pass != undefined ? pp._subaff2pass=="1" ? GetFlowVariable(jFlowCfg.SubAff.split("_")[1]) :"" : jFlowCfg.SubAff);
        
        
         var subaff2pass = (pp == null || pp._subaff2pass == undefined ? jFlowCfg.SubAff : 
                            pp._subaff2pass=="1" ? GetFlowVariable(jFlowCfg.SubAff.split("_")[1]) 
                            : "");
         
        