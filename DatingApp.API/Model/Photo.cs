namespace DatingApp.API.Model
{
    public class Photo
    {
        public int Id { get; set; }
        public string url { get; set; }
        public string description { get; set; }
        public string isMain { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}