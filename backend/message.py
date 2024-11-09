from twilio.rest import Client

account_sid = ''
auth_token = ''
client = Client(account_sid, auth_token)

message = client.messages.create(
    body="HELP PLEASE SAVE ME PAPI",
    from_='13152763924',  # Replace with your Twilio number
    to='9892858931'      # Replace with recipient's phone number
)

print(f"Message sent! SID: {message.sid}")