
### id to use for a workload is

can be used to identify a network or volume or ...

- reservation_id+workload_id
    - both are 4 byte int
    - can be represented in hex easily for using on a system
    - is truly unique because the reservation id links to the reservation obj on BCDB
    - the workload_id is incremental id inside the the reservation obj (unique)  
