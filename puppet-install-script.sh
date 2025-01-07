
#!/bin/bash

# Update the system
sudo yum update -y

# Install the Puppet repository
sudo rpm -Uvh https://yum.puppet.com/puppet7-release-el-7.noarch.rpm

# Install Puppet
sudo yum install -y puppet

# Start Puppet service
sudo systemctl start puppet

# Enable Puppet service to start on boot
sudo systemctl enable puppet

# Check Puppet version
puppet --version

echo "Puppet installation completed successfully!"
