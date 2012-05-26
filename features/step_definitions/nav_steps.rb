
Then /^(\w+) content should be seen$/ do |arg|
  page.should have_content(arg.camelcase)
end

When /^I click on the (\w+) navigation link$/ do |arg|
  click_link(arg.camelcase)
end

