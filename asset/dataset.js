var dataset = [
{"date":'2020-07-30',"p1":4498624,"p2":470000,"p3":9830000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4937717,  "f2":545331,"f3":10121786,"f4":525302,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":'2020-07-31',"p1":4508624,"p2":480000,"p3":9830000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4831316,"f2":556450,"f3":10099291,"f4":527658,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":'2020-08-03',"p1":4508624,"p2":485000,"p3":9830000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4775123,"f2":556879,"f3":10383536,"f4":526095,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":'2020-08-04',"p1":4508624,"p2":490000,"p3":9830000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4832148,"f2":562470,"f3":10523504,"f4":527548,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":'2020-08-05',"p1":4508624,"p2":495000,"p3":9830000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4819734,"f2":574162,"f3":10552064,"f4":525515,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":'2020-08-06',"p1":4508624,"p2":500000,"p3":9930000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4898246,"f2":586454,"f3":10789888,"f4":538791,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-10","p1":4508624,"p2":510000,"p3":9930000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4875041,"f2":607729,"f3":10777703,"f4":530187,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-13","p1":4508624,"p2":525000,"p3":9930000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4957271,"f2":641336,"f3":10830636,"f4":549380,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-14","p1":4508624,"p2":530000,"p3":9930000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4921983,"f2":638605,"f3":10856760,"f4":566922,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-18","p1":4508624,"p2":535000,"p3":9930000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4882223,"f2":643606,"f3":10879371,"f4":578510,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-19","p1":4508624,"p2":540000,"p3":9950000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":4867018,"f2":636154,"f3":10858365,"f4":575855,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-23","p1":5108624,"p2":550000,"p3":10950000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5308250,"f2":632356,"f3":12098287,"f4":597849,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-24","p1":5108624,"p2":555000,"p3":10950000,"p4":500000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5313037,"f2":637356,"f3":12255653,"f4":598724,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-26","p1":5108624,"p2":565000,"p3":12070000,"p4":650000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5344165,"f2":663528,"f3":13474055,"f4":790733,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-27","p1":5108624,"p2":570000,"p3":12170000,"p4":650000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5282346,"f2":670048,"f3":13571060,"f4":789527,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-28","p1":5108624,"p2":575000,"p3":12320000,"p4":650000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5273859,"f2":669213,"f3":13784262,"f4":789792,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-08-31","p1":5108624,"p2":580000,"p3":12320000,"p4":650000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5212115,"f2":676400,"f3":13849649,"f4":813256,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-01","p1":5138624,"p2":585000,"p3":12350000,"p4":650000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5205949,"f2":670200,"f3":14039616,"f4":809482,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-02","p1":5138624,"p2":590000,"p3":12350000,"p4":660000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5227276,"f2":681165,"f3":14213175,"f4":825778,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-03","p1":5138624,"p2":595000,"p3":12350000,"p4":660000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5342628,"f2":690126,"f3":13595734,"f4":778657,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-04","p1":5138624,"p2":600000,"p3":12350000,"p4":660000,"p5":0,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5284571,"f2":706431,"f3":13544717,"f4":767879,"f5":0,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-09","p1":5738624,"p2":615000,"p3":13850000,"p4":860000,"p5":3050000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6090614,"f2":714408,"f3":14830150,"f4":931686,"f5":3000000,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-10","p1":5738624,"p2":620000,"p3":13850000,"p4":860000,"p5":3050000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6178706,"f2":719409,"f3":14551550,"f4":923896,"f5":2985524,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-11","p1":5738624,"p2":625000,"p3":13850000,"p4":860000,"p5":3050000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6181446,"f2":731394,"f3":14511804,"f4":919945,"f5":2989091,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-14","p1":5738624,"p2":630000,"p3":13850000,"p4":860000,"p5":3252000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6290176,"f2":735779,"f3":14691574,"f4":945500,"f5":3189822,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-15","p1":5738624,"p2":640000,"p3":13850000,"p4":860000,"p5":3454000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6337411,"f2":762192,"f3":14737564,"f4":974574,"f5":3384161,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-18","p1":5488624,"p2":650000,"p3":14350000,"p4":860000,"p5":3454000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":5967159,"f2":758344,"f3":14493211,"f4":929663,"f5":3319051,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-22","p1":5738624,"p2":660000,"p3":14800000,"p4":1060000,"p5":3454000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6155590,"f2":745418,"f3":15150824,"f4":1132848,"f5":3291846,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-24","p1":5838624,"p2":670000,"p3":15100000,"p4":1060000,"p5":3454000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6188039,"f2":739366,"f3":15195497,"f4":1090773,"f5":3291846,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-25","p1":6238624,"p2":675000,"p3":16220000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6620861,"f2":744367,"f3":16627548,"f4":1565094,"f5":3797852,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-09-28","p1":6238624,"p2":680000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6648046,"f2":752529,"f3":17106850,"f4":1585436,"f5":3806799,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-05","p1":6238624,"p2":690000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6690514,"f2":778784,"f3":17115057,"f4":1606828,"f5":3788046,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-06","p1":6238624,"p2":695000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6748825,"f2":794381,"f3":16869012,"f4":1569619,"f5":3772171,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-07","p1":6238624,"p2":700000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6787537,"f2":801744,"f3":17115767,"f4":1590404,"f5":3784313,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-08","p1":6238624,"p2":705000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6802596,"f2":814217,"f3":17352729,"f4":1636802,"f5":3797640,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-12","p1":6238624,"p2":710000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6927046,"f2":820078,"f3":17719237,"f4":1692558,"f5":3796116,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-13","p1":6238624,"p2":715000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6998682,"f2":828970,"f3":17517706,"f4":1696841,"f5":3784612,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-19","p1":6238624,"p2":735000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6910994,"f2":829122,"f3":16936628,"f4":1632312,"f5":3712571,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-20","p1":6238624,"p2":740000,"p3":16420000,"p4":1510000,"p5":3959000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":6971184,"f2":835584,"f3":16948650,"f4":1642150,"f5":3708328,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-23","p1":6988624,"p2":755000,"p3":18220000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7706144,"f2":853667,"f3":18673164,"f4":2091616,"f5":3902209,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-26","p1":6988624,"p2":765000,"p3":18220000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7711782,"f2":863491,"f3":18428223,"f4":2061773,"f5":3845563,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-27","p1":6988624,"p2":765000,"p3":18220000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7667645,"f2":863471,"f3":18424090,"f4":2086461,"f5":3835186,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-28","p1":6988624,"p2":770000,"p3":18220000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7605795,"f2":863491,"f3":17815470,"f4":1999539,"f5":3768458,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-29","p1":6988624,"p2":775000,"p3":18340000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7460984,"f2":863486,"f3":18219506,"f4":2042002,"f5":3794737,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-10-30","p1":6988624,"p2":780000,"p3":19240000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7256340,"f2":868487,"f3":18692632,"f4":2021505,"f5":3757107,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-02","p1":6988624,"p2":785000,"p3":19240000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7373566,"f2":850914,"f3":18922931,"f4":2030252,"f5":3800203,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-03","p1":6988624,"p2":790000,"p3":19240000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7490033,"f2":867727,"f3":19251506,"f4":2071971,"f5":3844617,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-04","p1":6988624,"p2":795000,"p3":19240000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7517929,"f2":890338,"f3":19850088,"f4":2170787,"f5":3912428,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-06","p1":6988624,"p2":805000,"p3":19240000,"p4":1910000,"p5":4161000,"p6":0,"p7":0,"p8":0,"p9":0,"f1":7710136,"f2":929505,"f3":19967103,"f4":2198853,"f5":3916477,"f6":0,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-09","p1":6988624,"p2":810000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":7795244,"f2":934505,"f3":19921122,"f4":81429,"f5":2155885,"f6":3926455,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-10","p1":6988624,"p2":815000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":7873888,"f2":951834,"f3":19931836,"f4":81429,"f5":2110076,"f6":3936606,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-11","p1":6988624,"p2":820000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":8067843,"f2":957866,"f3":20109006,"f4":81429,"f5":2141449,"f6":3947351,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-13","p1":6988624,"p2":830000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":8151123,"f2":988273,"f3":20200899,"f4":81429,"f5":2146171,"f6":3967637,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-16","p1":6988624,"p2":835000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":8443792,"f2":993274,"f3":20298555,"f4":81429,"f5":2148757,"f6":3972656,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-18","p1":6988624,"p2":845000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":8372543,"f2":1023820,"f3":19862164,"f4":81429,"f5":2186466,"f6":3951845,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-19","p1":6988624,"p2":850000,"p3":19240000,"p4":0,"p5":1910000,"p6":4161000,"p7":0,"p8":0,"p9":0,"f1":8321749,"f2":1029530,"f3":20206205,"f4":81429,"f5":2209165,"f6":3991797,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-23","p1":7188624,"p2":860000,"p3":19640000,"p4":0,"p5":1910000,"p6":4363000,"p7":0,"p8":0,"p9":0,"f1":8880435,"f2":1064718,"f3":20396401,"f4":81429,"f5":2207717,"f6":4201111,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-25","p1":7438624,"p2":870000,"p3":20640000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9101735,"f2":1072882,"f3":21654231,"f4":79962,"f5":2440382,"f6":4511342,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-26","p1":7438624,"p2":875000,"p3":20640000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9227130,"f2":1077884,"f3":21654231,"f4":79962,"f5":2440382,"f6":4511342,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-27","p1":7438624,"p2":880000,"p3":20640000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9232633,"f2":1094795,"f3":21668784,"f4":79033,"f5":2463859,"f6":4516179,"f7":0,"f8":0,"f9":0}
,{"date":"2020-11-30","p1":7438624,"p2":885000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9075190,"f2":1102003,"f3":21811376,"f4":80306,"f5":2423482,"f6":4474038,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-01","p1":7438624,"p2":890000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9262906,"f2":1087122,"f3":22141212,"f4":80306,"f5":2477357,"f6":4482947,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-02","p1":7438624,"p2":895000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9479089,"f2":1110929,"f3":22102037,"f4":82753,"f5":2478549,"f6":4499721,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-03","p1":7438624,"p2":900000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9531954,"f2":1135818,"f3":22045639,"f4":81718,"f5":2490592,"f6":4497060,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-04","p1":7438624,"p2":905000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9705847,"f2":1150131,"f3":21943809,"f4":83704,"f5":2488938,"f6":4464024,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-07","p1":7438624,"p2":910000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9779902,"f2":1174658,"f3":21943809,"f4":83704,"f5":2488938,"f6":4464024,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-08","p1":7438624,"p2":915000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9724708,"f2":1187080,"f3":22131175,"f4":84694,"f5":2488938,"f6":4455714,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-09","p1":7438624,"p2":925000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":9952483,"f2":1202317,"f3":21938212,"f4":80258,"f5":2463636,"f6":4454104,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-10","p1":7438624,"p2":930000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10082230,"f2":1200280,"f3":21938212,"f4":80258,"f5":2463636,"f6":4454104,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-11","p1":7438624,"p2":930000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10098899,"f2":1200280,"f3":21985635,"f4":81808,"f5":2454813,"f6":4470335,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-14","p1":7448624,"p2":935000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10157764,"f2":1214824,"f3":22154541,"f4":81808,"f5":2464622,"f6":4470335,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-15","p1":7463624,"p2":940000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10146513,"f2":1216676,"f3":22366623,"f4":85808,"f5":2477867,"f6":4492931,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-16","p1":7463624,"p2":945000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10137371,"f2":1220010,"f3":22485602,"f4":85808,"f5":2476288,"f6":4502836,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-17","p1":7463624,"p2":950000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10041979,"f2":1230439,"f3":22522012,"f4":84211,"f5":2489742,"f6":4513702,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-18","p1":7463624,"p2":955000,"p3":20740000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10005033,"f2":1232446,"f3":22484278,"f4":86947,"f5":2519687,"f6":4540135,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-21","p1":7763624,"p2":960000,"p3":21340000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10318011,"f2":1237447,"f3":23196618,"f4":87326,"f5":2521831,"f6":4540135,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-22","p1":7763624,"p2":965000,"p3":21390000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10233851,"f2":1244204,"f3":23578169,"f4":91460,"f5":2467248,"f6":4533269,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-23","p1":7763624,"p2":970000,"p3":21390000,"p4":0,"p5":2060000,"p6":4666000,"p7":0,"p8":0,"p9":0,"f1":10429256,"f2":1229512,"f3":23537844,"f4":90859,"f5":2476378,"f6":4582653,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-24","p1":7963624,"p2":975000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11078266,"f2":1250896,"f3":24742484,"f4":91888,"f5":2641339,"f6":4891146,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-28","p1":7963624,"p2":980000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11134807,"f2":1282397,"f3":24760182,"f4":91484,"f5":2646576,"f6":4867957,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-29","p1":7963624,"p2":985000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11080683,"f2":1291822,"f3":24657159,"f4":87333,"f5":2690184,"f6":4867992,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-30","p1":7963624,"p2":990000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11242005,"f2":1321506,"f3":24493036,"f4":89028,"f5":2692675,"f6":4864247,"f7":0,"f8":0,"f9":0}
,{"date":"2020-12-31","p1":7963624,"p2":995000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11242005,"f2":1354249,"f3":24525458,"f4":88236,"f5":2705845,"f6":4833028,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-04","p1":7963624,"p2":1000000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11546334,"f2":1359169,"f3":24011385,"f4":88290,"f5":2696657,"f6":4829611,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-05","p1":7963624,"p2":1005000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11659581,"f2":1402261,"f3":24356344,"f4":91246,"f5":2715410,"f6":4841889,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-06","p1":7963624,"p2":1010000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11507087,"f2":1427194,"f3":24081960,"f4":91808,"f5":2706090,"f6":4864886,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-07","p1":7963624,"p2":1015000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":11562193,"f2":1419490,"f3":24660748,"f4":96037,"f5":2803049,"f6":4885863,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-08","p1":7963624,"p2":1020000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12203660,"f2":1454495,"f3":24973697,"f4":95168,"f5":2882411,"f6":4913924,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-11","p1":7963624,"p2":1025000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12555758,"f2":1528418,"f3":24802203,"f4":98830,"f5":2774855,"f6":4904959,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-12","p1":7963624,"p2":1030000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12491710,"f2":1538975,"f3":24898368,"f4":99119,"f5":2798555,"f6":4920131,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-13","p1":7963624,"p2":1035000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12347880,"f2":1539555,"f3":24929530,"f4":101831,"f5":2821045,"f6":4955113,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-14","p1":7963624,"p2":1040000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12384057,"f2":1544556,"f3":24876271,"f4":102660,"f5":2788059,"f6":4941702,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-15","p1":7968624,"p2":1045000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12193241,"f2":1548718,"f3":24664009,"f4":102679,"f5":2769440,"f6":4922369,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-19","p1":7968624,"p2":1055000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12040137,"f2":1488934,"f3":25030158,"f4":108184,"f5":2832458,"f6":4976255,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-20","p1":7968624,"p2":1060000,"p3":22620000,"p4":0,"p5":2210000,"p6":4969000,"p7":0,"p8":0,"p9":0,"f1":12078824,"f2":1536130,"f3":25390768,"f4":106828,"f5":2929341,"f6":5012019,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-21","p1":8468624,"p2":1065000,"p3":23420000,"p4":0,"p5":2210000,"p6":5271000,"p7":0,"p8":0,"p9":0,"f1":12693777,"f2":1549966,"f3":26387520,"f4":108138,"f5":2937094,"f6":5294991,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-22","p1":8468624,"p2":1070000,"p3":23420000,"p4":0,"p5":2210000,"p6":5271000,"p7":0,"p8":0,"p9":0,"f1":12639777,"f2":1577980,"f3":26558633,"f4":108722,"f5":2941402,"f6":5278932,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-25","p1":8618624,"p2":1075000,"p3":24420000,"p4":0,"p5":2310000,"p6":5271000,"p7":0,"p8":0,"p9":0,"f1":13089172,"f2":1571546,"f3":27764812,"f4":106395,"f5":3080142,"f6":5309725,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-26","p1":8618624,"p2":1080000,"p3":24420000,"p4":0,"p5":2310000,"p6":5271000,"p7":0,"p8":0,"p9":0,"f1":12803803,"f2":1615539,"f3":27860665,"f4":104739,"f5":3100270,"f6":5308523,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-27","p1":8618624,"p2":1085000,"p3":24624000,"p4":0,"p5":2310000,"p6":5271000,"p7":0,"p8":0,"p9":0,"f1":12666423,"f2":1580854,"f3":27475438,"f4":101772,"f5":3002188,"f6":5229482,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-28","p1":9018624,"p2":1090000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12779988,"f2":1574637,"f3":29383803,"f4":101859,"f5":3069637,"f6":5428603,"f7":0,"f8":0,"f9":0}
,{"date":"2021-01-29","p1":9018624,"p2":1095000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12446379,"f2":1550703,"f3":28617171,"f4":99268,"f5":3030204,"f6":5425881,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-01","p1":9018624,"p2":1100000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12553594,"f2":1516677,"f3":29067583,"f4":213486,"f5":3151591,"f6":5489863,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-02","p1":9018624,"p2":1105000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12760168,"f2":1562787,"f3":29401240,"f4":214829,"f5":3213615,"f6":5532197,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-03","p1":9018624,"p2":1110000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12768698,"f2":1590515,"f3":29458676,"f4":214584,"f5":3324057,"f6":5526229,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-04","p1":9018624,"p2":1115000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12615382,"f2":1611411,"f3":29790927,"f4":216862,"f5":3263511,"f6":5528121,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-05","p1":9018624,"p2":1120000,"p3":26124000,"p4":0,"p5":2410000,"p6":5473000,"p7":0,"p8":0,"p9":0,"f1":12691483,"f2":1588669,"f3":30007876,"f4":215003,"f5":3296343,"f6":5559957,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-08","p1":9418624,"p2":1125000,"p3":27324000,"p4":0,"p5":2410000,"p6":5675000,"p7":0,"p8":0,"p9":0,"f1":13122182,"f2":1611871,"f3":31295464,"f4":218036,"f5":3303212,"f6":5822799,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-10","p1":9618624,"p2":1135000,"p3":28124000,"p4":0,"p5":2710000,"p6":5675000,"p7":0,"p8":0,"p9":0,"f1":13186577,"f2":1600300,"f3":31720788,"f4":229108,"f5":3534325,"f6":5796992,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-16","p1":9618624,"p2":1145000,"p3":28124000,"p4":0,"p5":2710000,"p6":5877000,"p7":0,"p8":0,"p9":0,"f1":13637104,"f2":1646155,"f3":31599503,"f4":237316,"f5":3393777,"f6":5953221,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-17","p1":9618624,"p2":1145000,"p3":28144000,"p4":0,"p5":2710000,"p6":5877000,"p7":0,"p8":0,"p9":0,"f1":13394793,"f2":1654312,"f3":31599433,"f4":233095,"f5":3400207,"f6":5937093,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-18","p1":9618624,"p2":1145000,"p3":28144000,"p4":0,"p5":2710000,"p6":5877000,"p7":0,"p8":0,"p9":0,"f1":13171632,"f2":1634664,"f3":31451469,"f4":228636,"f5":3407574,"f6":5951916,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-19","p1":10218624,"p2":1145000,"p3":30644000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":13996945,"f2":1608986,"f3":33873884,"f4":234193,"f5":3566549,"f6":6331849,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-23","p1":10218624,"p2":1145000,"p3":30719000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":13718803,"f2":1603564,"f3":33373398,"f4":221912,"f5":3448121,"f6":6314457,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-24","p1":10218624,"p2":1145000,"p3":30719000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":13617428,"f2":1569360,"f3":33626419,"f4":232965,"f5":3521089,"f6":6347414,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-25","p1":10418624,"p2":1155000,"p3":32119000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14228958,"f2":1579361,"f3":33889314,"f4":217797,"f5":3373598,"f6":6234488,"f7":0,"f8":0,"f9":0}
,{"date":"2021-02-26","p1":10418624,"p2":1155000,"p3":32519000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":13863324,"f2":1639064,"f3":34656842,"f4":221459,"f5":3370787,"f6":6211134,"f7":0,"f8":0,"f9":0}
,{"date":"2021-03-03","p1":10418624,"p2":1155000,"p3":32519000,"p4":0,"p5":2910000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14106879,"f2":1606805,"f3":34494122,"f4":215224,"f5":3349742,"f6":6299343,"f7":0,"f8":0,"f9":0}
,{"date":"2021-03-30","p1":10998624,"p2":1155000,"p3":35869000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14459959,"f2":1594530,"f3":38578677,"f4":212012,"f5":3642027,"f6":6383762,"f7":0,"f8":0,"f9":0}
,{"date":"2021-03-31","p1":10998624,"p2":1155000,"p3":35869000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14300784,"f2":1607155,"f3":38877664,"f4":216447,"f5":3710819,"f6":6390380,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-01","p1":10998624,"p2":1155000,"p3":35869000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14494711,"f2":1607155,"f3":39363498,"f4":228892,"f5":3786294,"f6":6448936,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-05","p1":10488624,"p2":1155000,"p3":35849000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14367196,"f2":1641627,"f3":39915753,"f4":247357,"f5":3907868,"f6":6461185,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-06","p1":10488624,"p2":1155000,"p3":35849000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14485133,"f2":1641627,"f3":39911194,"f4":247159,"f5":3899570,"f6":6456846,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-07","p1":10488624,"p2":1155000,"p3":35849000,"p4":0,"p5":3160000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":14444983,"f2":1641627,"f3":39824848,"f4":243386,"f5":3901770,"f6":6378387,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-08","p1":11088624,"p2":0,"p3":36104000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15131214,"f2":0,"f3":40321520,"f4":246764,"f5":4335360,"f6":6415226,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-09","p1":11088624,"p2":0,"p3":36104000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15016663,"f2":0,"f3":40829749,"f4":246943,"f5":4375027,"f6":6431892,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-12","p1":11088624,"p2":0,"p3":36104000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15002525,"f2":0,"f3":40912079,"f4":254776,"f5":4375273,"f6":6413109,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-13","p1":11088624,"p2":0,"p3":36254000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15093499,"f2":0,"f3":41342952,"f4":254491,"f5":4498666,"f6":6486933,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-14","p1":11088624,"p2":0,"p3":36254000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15106983,"f2":0,"f3":40800023,"f4":259411,"f5":4429029,"f6":6490651,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-15","p1":11088624,"p2":0,"p3":36254000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15207508,"f2":0,"f3":41298363,"f4":258921,"f5":4468385,"f6":6512647,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-19","p1":11088624,"p2":0,"p3":36254000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15280405,"f2":0,"f3":41184066,"f4":247592,"f5":4433127,"f6":6494080,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-21","p1":11388624,"p2":0,"p3":36954000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15474466,"f2":0,"f3":41753486,"f4":247683,"f5":4436872,"f6":6460974,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-22","p1":11388624,"p2":0,"p3":36954000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15471752,"f2":0,"f3":41494455,"f4":247431,"f5":4381619,"f6":6466339,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-23","p1":11388624,"p2":0,"p3":36954000,"p4":0,"p5":3460000,"p6":6280000,"p7":0,"p8":0,"p9":0,"f1":15517017,"f2":0,"f3":41991279,"f4":251485,"f5":4446564,"f6":6517961,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-26","p1":11688624,"p2":0,"p3":37754000,"p4":0,"p5":3660000,"p6":6481000,"p7":0,"p8":0,"p9":0,"f1":15815741,"f2":0,"f3":43045882,"f4":252182,"f5":4695934,"f6":6726957,"f7":0,"f8":0,"f9":0}
,{"date":"2021-04-28","p1":11688624,"p2":0,"p3":37754000,"p4":0,"p5":3660000,"p6":6481000,"p7":0,"p8":0,"p9":0,"f1":15589335,"f2":0,"f3":42466509,"f4":243222,"f5":4673686,"f6":6677061,"f7":0,"f8":0,"f9":0}
,{"date":"2021-05-12","p1":11938624,"p2":0,"p3":38554000,"p4":0,"p5":3860000,"p6":6481000,"p7":0,"p8":0,"p9":0,"f1":15294657,"f2":0,"f3":41637310,"f4":257216,"f5":4560972,"f6":6620089,"f7":0,"f8":0,"f9":0}
,{"date":"2021-05-24","p1":12338624,"p2":0,"p3":39354000,"p4":0,"p5":4060000,"p6":6481000,"p7":0,"p8":0,"p9":0,"f1":16002023,"f2":0,"f3":43875643,"f4":273214,"f5":4967597,"f6":6786921,"f7":0,"f8":0,"f9":0}
,{"date":"2021-05-25","p1":12938624,"p2":0,"p3":40154000,"p4":0,"p5":4060000,"p6":6481000,"p7":0,"p8":0,"p9":0,"f1":16685773,"f2":0,"f3":44669730,"f4":274937,"f5":5007855,"f6":6815529,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-03","p1":13093624,"p2":0,"p3":40304000,"p4":0,"p5":4060000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":17302845,"f2":0,"f3":43985846,"f4":287590,"f5":4821084,"f6":6927254,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-04","p1":13093624,"p2":0,"p3":40304000,"p4":0,"p5":4060000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":17279185,"f2":0,"f3":44577084,"f4":292292,"f5":4920198,"f6":7016693,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-11","p1":13093624,"p2":0,"p3":40304000,"p4":0,"p5":4060000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":17268564,"f2":0,"f3":45206227,"f4":306748,"f5":5034066,"f6":7002440,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-21","p1":13393624,"p2":0,"p3":40904000,"p4":0,"p5":4060000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":17413509,"f2":0,"f3":46690561,"f4":309419,"f5":5166066,"f6":7076366,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-24","p1":13393624,"p2":0,"p3":41104000,"p4":0,"p5":4060000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":17620832,"f2":0,"f3":47600589,"f4":342298,"f5":5274180,"f6":7114514,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-28","p1":13793624,"p2":0,"p3":41804000,"p4":0,"p5":4260000,"p6":6682000,"p7":0,"p8":0,"p9":0,"f1":18175249,"f2":0,"f3":48433706,"f4":343198,"f5":5453536,"f6":7095582,"f7":0,"f8":0,"f9":0}
,{"date":"2021-06-29","p1":13793624,"p2":0,"p3":41804000,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18028239,"f2":0,"f3":48672899,"f4":342360,"f5":5440096,"f6":7300638,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-01","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":17920774,"f2":0,"f3":48852503,"f4":340706,"f5":5437216,"f6":7283156,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-02","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":17835844,"f2":0,"f3":49477484,"f4":353000,"f5":5549738,"f6":7327659,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-07","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18143499,"f2":0,"f3":49818891,"f4":341812,"f5":5598214,"f6":7375407,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-09","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":17987036,"f2":0,"f3":50485107,"f4":354405,"f5":5656393,"f6":7426682,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-12","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18168743,"f2":0,"f3":50701460,"f4":355923,"f5":5680634,"f6":7458507,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-13","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18161158,"f2":0,"f3":50643114,"f4":346793,"f5":5714745,"f6":7420834,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-14","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18108853,"f2":0,"f3":50905395,"f4":348398,"f5":5710627,"f6":7439971,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-15","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18217923,"f2":0,"f3":50861095,"f4":342029,"f5":5684515,"f6":7459261,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-16","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":18049208,"f2":0,"f3":50138021,"f4":339254,"f5":5621003,"f6":7381592,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-19","p1":13793624,"p2":0,"p3":41837500,"p4":0,"p5":4260000,"p6":6883000,"p7":0,"p8":0,"p9":0,"f1":17861928,"f2":0,"f3":49225575,"f4":345216,"f5":5538870,"f6":7283383,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-21","p1":14193624,"p2":0,"p3":42537500,"p4":0,"p5":4260000,"p6":7084000,"p7":0,"p8":0,"p9":0,"f1":18353297,"f2":0,"f3":51497634,"f4":359451,"f5":5693721,"f6":7644642,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-23","p1":14443624,"p2":0,"p3":43287500,"p4":0,"p5":4360000,"p6":7084000,"p7":0,"p8":0,"p9":0,"f1":18768115,"f2":0,"f3":52951176,"f4":358211,"f5":5940950,"f6":7670910,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-26","p1":14443624,"p2":0,"p3":43287500,"p4":0,"p5":4360000,"p6":7084000,"p7":0,"p8":0,"p9":0,"f1":18653920,"f2":0,"f3":52913162,"f4":346358,"f5":5985410,"f6":7645806,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-28","p1":14543624,"p2":0,"p3":43287500,"p4":0,"p5":4360000,"p6":7084000,"p7":0,"p8":0,"p9":0,"f1":18590314,"f2":0,"f3":52429473,"f4":345078,"f5":6004848,"f6":7649371,"f7":0,"f8":0,"f9":0}
,{"date":"2021-07-29","p1":15043624,"p2":0,"p3":44287500,"p4":0,"p5":4460000,"p6":7385000,"p7":0,"p8":0,"p9":0,"f1":19240049,"f2":0,"f3":53839514,"f4":345363,"f5":6150986,"f6":8004896,"f7":0,"f8":0,"f9":0}

];
