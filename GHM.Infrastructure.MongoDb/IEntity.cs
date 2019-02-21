using System;
using System.Collections.Generic;
using System.Text;
using MongoDB.Bson;

namespace GHM.Infrastructure.MongoDb
{
    /// <summary>
    /// Interface chung của entity
    /// </summary>
    /// <typeparam name="TKey">Kiểu giữ liệu được sử dụng của id của entity</typeparam>
    public interface IEntity<TKey>
    {
        /// <summary>
        /// Lấy về hoặc gán giá trị cho id của Entity
        /// </summary>
        TKey Id { get; set; }

        DateTime CreateTime { get; set; }
    }

    /// <summary>
    /// Giá trị default của Entity
    /// </summary>
    /// <remarks>Giả sử kiểu dữ liệu cho id của entity là string</remarks>
    public interface IEntity : IEntity<ObjectId> { }
}
