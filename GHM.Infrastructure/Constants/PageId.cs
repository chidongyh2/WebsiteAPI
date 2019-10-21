namespace GHM.Infrastructure.Constants
{
    public enum PageId
    {
        None = -1,

        // ------ Config: 1 ------
        Config = 1,
        ConfigPage = 2,
        ConfigRoles = 3,
        ConfigClient = 4,
        ConfigTenant = 5,
        ConfigAccount = 6,
        ApproverConfig = 7,
        ConfigEmail = 9,
        Setting = 8,
        ApproveSettings = 10,

        // ------ Survey: 100 ------     
        Survey = 100,
        SurveyList = 101,
        SurveyCategory = 102,
        SurveyQuestion = 103,
        SurveyGroupQuestion = 104,
        SurveyMySurvey = 105,
        SurveyReport = 106,
        SurveyReportList = 107,
        SurveyReportByUser = 108,
        SurveyReportDayDetail = 109,
        SurveyNewsReference = 110,
        SurveynewsPreview = 111,
        SurveyNewsDetail = 112,
        SurveyDashboard = 112,
        SurveyPreview = 113,
        SurveyQuestionApprove = 114,
        QuestionGroup = 114,
        SurveyGroup = 115,


        // ------ Website: 200 ------
        Website = 200,
        News = 201,
        NewsCategory = 202,
        NewsSpecialist = 203,    // Chuyên Khoa
        NewsServices = 204,      // Dịch vụ 
        NewsRecruitment = 205,   // Tuyển Dụng
        NewsAboutUs = 206,       // Giới thiệu
        NewsMedicalKnowledge = 207, // Góc chuyên môn
        WebsiteConfig = 208,
        WebsiteConfigSlider = 209,
        WebsiteConfigMenu = 210,
        //Customer = 211,
        Feedback = 212,
        Promotion = 213,
        Faqs = 214,
        Course = 215,
        WebsiteVideo = 216,
        WebsiteFolder = 217,
        WebsiteFile = 218,
        WebsiteBanner = 219,
        SocialNetwork = 220,
        MailType = 221,
        //MailGroup = 222,
        //Mail=223,
        Tag = 224,
        BranchContact = 225,
        WebsiteImage = 226,
        Album = 227,
        CategoryInvolve = 228,
        VideoGroup = 219,
        CoreValue = 229,
        Faq = 231,
        AgencyInfo = 232,

        // ------ Hr: 300 ------
        Hr = 300,
        Organization = 321,
        Title = 301,
        Position = 302,
        User = 303,
        UserList = 304,
        LaborContract = 305,
        Insurance = 306,
        QuickInsertUser = 307,
        Office = 308,
        OfficePosition = 309,
        TrainingHistory = 310,
        EmploymentHistory = 311,
        CommendationDiscipline = 312,
        UserRecordsManagement = 313,
        ManagerConfig = 314,
        Assessment = 315,
        AssessmentApprove = 316,
        CriteriaLibrary = 317,
        CriteriaConfig = 318,
        MyAssessment = 319,
        AssessmentResult = 320,

        // ------ Task: 400 ------     
        Task = 400,
        TaskGroup = 401,
        TaskApprove = 402,
        TaskList = 403,

        // ------ Website: 500 ------
        Mail = 500,
        MailGroup = 501,
        WebsitePromotion = 502,

        // ------ CRM: 600 ------     
        CustomerCare = 600,
        CustomerCareConfigFeedback = 601,
        CustomerCareMine = 602,
        CustomerCareResearchDoctor = 603,
        CustomerCareQualityControl = 604,
        CustomerCareReportByEmployee = 605,
        CustomerCareConfigMissInformation = 606,
        CustomerCareReportNotGlad = 607,
        CustomerCareReportAbnormal = 608,
        CustomerCareReportCustomerComment = 609,
        CustomerCareReportMediaclRecord = 610,
        CustomerCareConfigCriteria = 611,
        CustomerCareInstructionCall = 612,
        CustomerCareReportMarkScore = 613,
        CustomerCareComplainCustomer = 614,
        CustomerCareReportCampaign = 615,
        CustomerCareReportAfterReminder = 616,

        // ------ Timekeeping: 700 ------     
        TimekeepingConfig = 700,
        TimekeepingWorkingSchedule = 701,
        TimekeepingDayOffApprove = 702,
        TimekeepingConnectToMachine = 703,
        TimekeepingWorkingDayData = 704,
        TimekeepingDownloadUserData = 705,
        TimekeepingUploadUserData = 706,
        TimekeepingSyncData = 707,
        TimekeepingTimeSheet = 708,
        TimekeepingInLateOutEarly = 790,
        TimekeepingOverTime = 710,
        TimekeepingForgotCheckIn = 711,
        TimekeepingInLateOutEarlyFrequently = 712,

        // ------ Customer: 800 -------
        Customer = 800,
        Jobs = 801,
        CustomerResource = 802,
        CustomerSubject = 803,
        ListPatient = 804,

        // Relationship.
        RelationShipType = 900,

        // Events
        Event = 10000,
        EventList = 10001,

        // Brand
        Brand = 20000,

       // ------ Warehouse: 100000 -------
        Warehouse = 100000,
        Product = 100001,
        ProductAttribute = 100002,
        ProductCategory = 100003,
        Supplier = 100004,
        Contact = 100005,
        Brands = 100006,
        Unit = 100007,
        ProductCategoriesAttribute = 100008,
        WarehouseManagement = 100009,
        GoodsReceiptNote = 100010,
        GoodsDeliveryNote = 100011,
        WarehouseConfig = 100012,
        InventoryReport = 100013,
        WarehouseCard = 100014,
        Inventory = 100015,
        Order = 100016
    }
}
