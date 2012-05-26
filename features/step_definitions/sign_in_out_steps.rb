

Given /^I am not signed in to facebook$/ do
  visit 'http://www.facebook.com'
  if page.has_selector?("#userNavigationLabel")
    acct_menu = page.find("#userNavigationLabel")
    acct_menu.click
    click_button "Log Out"
  end
end

Given /^I am signed in to facebook$/ do
  step %Q{I am not signed in to facebook}
  visit 'http://www.facebook.com'
  page.find('#email').set(ENV['facebook_user'])
  page.find('#pass').set(ENV['facebook_pass'])
  click_button 'Log In'
end

When /^I elect to sign in using facebook$/ do
  page.find('li#sign_in_menu a').click
  click_link "Sign in with Facebook"
end

Then /^I should see the home page without a sign in form showing$/ do
  page.should have_no_selector(:css, "#sign_in_menu_content")
end

When /^I should be signed into the facebook account for this app$/ do
  #page.should have_selector(:xpath, "//li[id()='account_menu']/a[contains(text(),'#{ENV['facebook_user']}')]")
  within "#account_menu a" do
    page.should have_content(ENV['facebook_user'])
  end
end

# Facebook dependent steps, if they change their pages these could break

Then /^I should see the facebook sign in page$/ do
  page.should have_selector(:css, "html#facebook")
  page.should have_selector(:css, "input#email")
  page.should have_selector(:css, "input#pass")
end

When /^I enter facebook credentials$/ do
  page.find("#email").set(ENV['facebook_user'])
  page.find('#pass').set(ENV['facebook_pass'])
  click_button 'Log In'
end
