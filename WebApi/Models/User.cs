﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class User
    {
        [BsonId, BsonElement("dbId")]
        public ObjectId DBId { get; private set; }

        [BsonElement("userId")]
        public long UserId { get; set; }

        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("role")]
        public string Role { get; set; }

        //public List<Company> Favorites { get; set; }

    }
}
