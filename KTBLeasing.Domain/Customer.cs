using System;
using System.Text;
using System.Collections.Generic;


namespace KTBLeasing.FrontLeasing.Domain {
    
    public class Customer {
        public Customer() { }
        public virtual long Guid2 { get; set; }
        public virtual long PositionId { get; set; }
        public virtual long Positionguid { get; set; }
    }
}