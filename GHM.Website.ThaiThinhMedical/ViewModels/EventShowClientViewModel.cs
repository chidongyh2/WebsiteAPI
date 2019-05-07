using System.Collections.Generic;

namespace GHM.Website.ThaiThinhMedical.ViewModels
{
    public class EventShowClientViewModel
    {
        public EventDetailClientViewModel EventInfo { get; set; }
        public List<EventDayViewModel> EventDays { get; set; }
        public List<RegisterSearchViewModel> Invitations { get; set; }
        public List<AlbumWithItemViewModel> Albums { get; set; }
    }
}
