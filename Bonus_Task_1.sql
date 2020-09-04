/* Question i */
SELECT TenantID, AptID COUNT(*) TenantID FROM AptTenants GROUP BY TenantID, AptID HAVING COUNT(*) > 1
/* Question ii */
SELECT * from Buildings
SELECT * from   Requests WHERE Status = 'open' 