```js
</tr>
<% } %>
</table>


<h3>Send Tokens</h3>
<form method="post" action="/admin/send">
<input type="hidden" name="_csrf" value="<%= csrfToken %>">
<input type="text" name="to_user_id" placeholder="User ID" required>
<input type="number" step="0.01" name="amount" placeholder="Amount" required>
<input type="text" name="reason" placeholder="Reason (optional)">
<button type="submit">Send</button>
</form>


<h3>Adjust (Credit/Debit with User Permission)</h3>
<form method="post" action="/admin/adjust">
<input type="hidden" name="_csrf" value="<%= csrfToken %>">
<input type="text" name="user_id" placeholder="User ID" required>
<input type="number" step="0.01" name="amount" placeholder="+credit / -debit" required>
<input type="text" name="reason" placeholder="Reason">
<button type="submit">Adjust</button>
</form>


<h3>Users</h3>
<table class="table">
<tr><th>ID</th><th>Email</th><th>Role</th><th>Balance</th><th>Admin Adjust</th><th>Joined</th></tr>
<% for (const u of users) { %>
<tr>
<td class="badge"><%= u.id.slice(0,8) %></td>
<td><%= u.email %></td>
<td><%= u.role %></td>
<td><%= fmt(u.balance) %></td>
<td><%= u.allow_admin_adjust ? 'ON' : 'OFF' %></td>
<td><small><%= u.created_at %></small></td>
</tr>
<% } %>
</table>
`);


app.listen(process.env.PORT || 3000, () => console.log('Server running on port', process.env.PORT || 3000));
```


---
