#!/bin/bash

# List of hosts (update with your hosts)
HOSTS=("host1.example.com" "host2.example.com" "host3.example.com")

# Username to change password for
USERNAME="your_username"

# New password
NEW_PASSWORD="your_new_password"

# Loop through each host and change the password
for HOST in "${HOSTS[@]}"; do
    echo "Changing password on $HOST..."
    
    ssh -o BatchMode=yes "$USERNAME@$HOST" << EOF
    echo -e "$NEW_PASSWORD\n$NEW_PASSWORD" | passwd $USERNAME
EOF

    if [ $? -eq 0 ]; then
        echo "Password successfully changed on $HOST."
    else
        echo "Failed to change password on $HOST."
    fi
done

echo "Password change process completed."


# Replace HOSTS with the list of target hostnames or IPs.
# Set your username in USERNAME and the desired password in NEW_PASSWORD.
# Save this script, for example as change_password.sh, and make it executable:
# chmod +x change_password.sh
# ./change_password.sh
# SSH Access: Ensure SSH keys are set up for passwordless access, or the script will repeatedly prompt for passwords.
# Security: Avoid hardcoding passwords in scripts for production use. Instead, consider securely passing the password via a prompt or an environment variable.
# Error Handling: Enhance error handling to log failures or retry specific hosts.
