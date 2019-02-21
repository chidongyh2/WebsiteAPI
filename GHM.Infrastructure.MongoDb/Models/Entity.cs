using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GHM.Infrastructure.MongoDb
{
    /// <summary>
    /// Abstract entity cho tất cả các BusinessEntities
    /// </summary>
    [Serializable]
    [BsonIgnoreExtraElements(Inherited = true)]
    public class Entity<T> : IEntity<T>
    {
        /// <summary>
        /// Lấy về hoặc gán giá trị cho id của entity (Bản ghi primary của 1 entity)
        /// </summary>        
        [BsonRepresentation(BsonType.ObjectId)]
        public T Id { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime CreateTime { get; set; }

        public Entity()
        {
            CreateTime = DateTime.Now;
        }
    }
}
